const express = require("express");
const {
  createPublication,
  getAllPublications,
  getPublicationById,
  updatePublication,
  deletePublication,
} = require("../controllers/publicationController");
const router = express.Router();

router.post("/", createPublication); // Ajouter une publication
router.get("/", getAllPublications); // Récupérer toutes les publications
router.get("/:id", getPublicationById); // Récupérer une publication spécifique
router.put("/:id", updatePublication); // Modifier une publication
router.delete("/:id", deletePublication); // Supprimer une publication

module.exports = router;
