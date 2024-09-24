const express = require("express");
const {
  createCommande, // Nom corrigé
  getAllCommandes, // Nom corrigé
  getCommandeById, // Nom corrigé
  updateCommande, // Nom corrigé
  deleteCommande, // Nom corrigé
} = require("../controllers/commandeController");
const router = express.Router();

router.post("/", createCommande); // Ajouter une commande
router.get("/", getAllCommandes); // Récupérer toutes les commandes
router.get("/:id", getCommandeById); // Récupérer une commande spécifique
router.put("/:id", updateCommande); // Modifier une commande
router.delete("/:id", deleteCommande); // Supprimer une commande

module.exports = router;
