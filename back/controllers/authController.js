const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Fonction pour gérer la connexion
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Chercher l'utilisateur dans la base de données
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    // Créer un token JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Retourner le token et le rôle
    res.status(200).json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
