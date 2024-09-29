import { Router } from "express";
import { createPublication, getAllPublications, getPublicationById, updatePublication, deletePublication } from "../controllers/publicationController";
const router = Router();

router.post("/", createPublication); // Ajouter une publication
router.get("/", getAllPublications); // Récupérer toutes les publications
router.get("/:id", getPublicationById); // Récupérer une publication spécifique
router.put("/:id", updatePublication); // Modifier une publication
router.delete("/:id", deletePublication); // Supprimer une publication

export default router;
