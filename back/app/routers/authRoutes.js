import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController";
const router = Router();

// Route pour la connexion
router.post("/login", loginUser);

// Route pour l'inscription
router.post("/register", registerUser);

export default router;
