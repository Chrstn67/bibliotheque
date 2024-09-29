import User, { findOne } from "../models/User";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

// Fonction pour gérer la création d'un utilisateur
export async function registerUser(req, res) {
  const { username, password, role } = req.body;

  try {
    // Hasher le mot de passe
    const hashedPassword = await hash(password, 10);

    // Créer un nouvel utilisateur
    const user = new User({
      username,
      password: hashedPassword,
      role,
    });

    // Sauvegarder l'utilisateur dans la base de données
    await user.save();

    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    res.status(500).json({ message: error.message });
  }
}

// Fonction pour gérer la connexion
export async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    // Chercher l'utilisateur dans la base de données
    const user = await findOne({ username });
    if (!user) {
      console.log("Utilisateur non trouvé");
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    // Vérifier le mot de passe
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      console.log("Mot de passe incorrect");
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    // Créer un token JWT
    const token = sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Retourner le token et le rôle
    res.status(200).json({ token, role: user.role });
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    res.status(500).json({ message: error.message });
  }
}
