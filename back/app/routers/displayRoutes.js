import { Router } from "express";
import { createDisplay, getAllDisplays, getDisplayById, updateDisplay, deleteDisplay } from "../controllers/displayController";
const router = Router();

router.post("/", createDisplay); // Ajouter un présentoir
router.get("/", getAllDisplays); // Récupérer tous les présentoirs
router.get("/:id", getDisplayById); // Récupérer un présentoir spécifique
router.put("/:id", updateDisplay); // Modifier un présentoir
router.delete("/:id", deleteDisplay); // Supprimer un présentoir

export default router;
