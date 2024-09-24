const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");
const dotenv = require("dotenv");
const authRoutes = require("../routes/authRoutes");
const userRoutes = require("../routes/userRoutes");
const publicationRoutes = require("../routes/publicationRoutes");
const commandeRoutes = require("../routes/commandeRoutes");
const readersRoutes = require("../routes/readerRoutes");
const displayRoutes = require("../routes/displayRoutes");

dotenv.config();
connectDB(); // Connexion à la base de données

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Pour lire les JSON dans les requêtes

// Routes
app.use("/api/auth", authRoutes); // Authentification
app.use("/api/users", userRoutes); // Routes utilisateur
app.use("/api/publications", publicationRoutes); // Routes pour les publications
app.use("/api/commandes", commandeRoutes); // Routes pour les commandes des lecteurs
app.use("/api/readers", readersRoutes); // Routes pour les lecteurs
app.use("/api/displays", displayRoutes); // Routes pour les présentoirs

// Gestion des erreurs pour les routes non trouvées
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page non trouvée",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
