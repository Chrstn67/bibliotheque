const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");
const router = express.Router();

// Route pour la connexion
router.post("/login", loginUser);

// Route pour l'inscription
router.post("/register", registerUser);

module.exports = router;
