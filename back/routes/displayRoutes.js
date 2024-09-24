const express = require("express");
const {
  createDisplay,
  getAllDisplays,
  getDisplayById,
  updateDisplay,
  deleteDisplay,
} = require("../controllers/displayController");
const router = express.Router();

router.post("/", createDisplay); // Ajouter un présentoir
router.get("/", getAllDisplays); // Récupérer tous les présentoirs
router.get("/:id", getDisplayById); // Récupérer un présentoir spécifique
router.put("/:id", updateDisplay); // Modifier un présentoir
router.delete("/:id", deleteDisplay); // Supprimer un présentoir

module.exports = router;
