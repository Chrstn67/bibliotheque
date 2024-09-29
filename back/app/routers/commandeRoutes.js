import { Router } from "express";
import { createCommande, getAllCommandes, getCommandeById, updateCommande, deleteCommande } from "../controllers/commandeController";
const router = Router();

router.post("/", createCommande); // Ajouter une commande
router.get("/", getAllCommandes); // Récupérer toutes les commandes
router.get("/:id", getCommandeById); // Récupérer une commande spécifique
router.put("/:id", updateCommande); // Modifier une commande
router.delete("/:id", deleteCommande); // Supprimer une commande

export default router;
