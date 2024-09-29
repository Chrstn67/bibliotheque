import { Router } from "express";
import { createReader, getAllReaders, getReaderById, updateReader, deleteReader } from "../controllers/readerController";
const router = Router();

router.post("/", createReader); // Ajouter un lecteur
router.get("/", getAllReaders); // Récupérer tous les lecteurs
router.get("/:id", getReaderById); // Récupérer un lecteur spécifique
router.put("/:id", updateReader); // Modifier un lecteur
router.delete("/:id", deleteReader); // Supprimer un lecteur

export default router;
