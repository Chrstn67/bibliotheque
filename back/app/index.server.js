import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./data/db";
import authRoutes from "../routes/authRoutes";
import userRoutes from "./routers/userRoutes";
import publicationRoutes from "../routes/publicationRoutes";
import commandeRoutes from "../routes/commandeRoutes";
import readersRoutes from "../routes/readerRoutes";
import displayRoutes from "../routes/displayRoutes";

config();

const app = express();
app.use(express.json()); // Pour lire les JSON dans les requêtes

// Middleware
app.use(cors(({
  origin: `${process.env.CORS_ORIGIN}`,
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))); // Utiliser CORS

// connectDB(rs); // Connexion à la base de données

// Routes
// app.use("/api/auth", authRoutes); // Authentification
// app.use("/api/users", userRoutes); // Routes utilisateur
// app.use("/api/publications", publicationRoutes); // Routes pour les publications
// app.use("/api/commandes", commandeRoutes); // Routes pour les commandes des lecteurs
// app.use("/api/readers", readersRoutes); // Routes pour les lecteurs
// app.use("/api/displays", displayRoutes); // Routes pour les présentoirs

// Gestion des erreurs pour les routes non trouvées
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page non trouvée",
  });
});
