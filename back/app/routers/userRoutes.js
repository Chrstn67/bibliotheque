import { Router } from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../../controllers/userController";

const router = Router();

// Toutes les routes sont accessibles uniquement aux administrateurs
// router.use(protect); // Vérifie que l'utilisateur est authentifié
// router.use(restrictTo("admin")); // Restreint l'accès aux administrateurs

router.post("/", createUser); // Ajouter un utilisateur
router.get("/", getAllUsers); // Récupérer tous les utilisateurs
router.get("/:id", getUserById); // Récupérer un utilisateur spécifique
router.put("/:id", updateUser); // Mettre à jour un utilisateur
router.delete("/:id", deleteUser); // Supprimer un utilisateur

export default router;
