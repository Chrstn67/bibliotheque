import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200 && response.data.token) {
        // Enregistrer le token et rôle de l'utilisateur
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        // Rediriger en fonction du rôle
        switch (response.data.role) {
          case "admin":
            navigate("/stock-management");
            break;
          case "publications":
            navigate("/publication-management");
            break;
          case "presentoirs":
            navigate("/presentoir-management");
            break;
          default:
            navigate("/");
        }
      } else {
        setError(
          "Erreur lors de la connexion. Veuillez vérifier vos identifiants."
        );
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      setError("Identifiants incorrects ou problème serveur.");
    }
  };

  return (
    <section className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Connexion</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Se connecter</button>
      </form>
    </section>
  );
}

export default Login;
