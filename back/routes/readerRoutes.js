const express = require("express");
const {
  createReader,
  getAllReaders,
  getReaderById,
  updateReader,
  deleteReader,
} = require("../controllers/readerController");
const router = express.Router();

router.post("/", createReader); // Ajouter un lecteur
router.get("/", getAllReaders); // Récupérer tous les lecteurs
router.get("/:id", getReaderById); // Récupérer un lecteur spécifique
router.put("/:id", updateReader); // Modifier un lecteur
router.delete("/:id", deleteReader); // Supprimer un lecteur

module.exports = router;
