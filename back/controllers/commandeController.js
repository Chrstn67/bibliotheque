const mongoose = require("mongoose");
const Commande = require("../models/Commande");
const Reader = require("../models/Reader");
const Publication = require("../models/Publication");

// Get all commandes
exports.getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find()
      .populate("reader")
      .populate("publications.publicationId");
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Create a new commande
exports.createCommande = async (req, res) => {
  try {
    const { reader, publications, typeCommande } = req.body;

    // Vérifier que reader est un ObjectId valide
    if (!mongoose.Types.ObjectId.isValid(reader)) {
      return res.status(400).json({ message: "Reader ID invalide" });
    }

    // Chercher le lecteur dans la base de données
    const foundReader = await Reader.findById(reader);
    if (!foundReader) {
      return res.status(404).json({ message: "Lecteur non trouvé" });
    }

    // Créer la nouvelle commande
    const newCommande = new Commande({
      reader,
      publications,
      typeCommande,
    });

    await newCommande.save();
    res.status(201).json(newCommande);
  } catch (error) {
    console.error("Erreur lors de la création de la commande:", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

// Get a single commande by ID
exports.getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id)
      .populate("reader")
      .populate("publications.publicationId");
    if (!commande) {
      return res.status(404).json({ error: "Commande non trouvée" });
    }
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Update a commande by ID
exports.updateCommande = async (req, res) => {
  try {
    const updatedCommande = await Commande.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .populate("reader")
      .populate("publications.publicationId");
    if (!updatedCommande) {
      return res.status(404).json({ error: "Commande non trouvée" });
    }
    res.status(200).json(updatedCommande);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Delete a commande by ID
exports.deleteCommande = async (req, res) => {
  try {
    const deletedCommande = await Commande.findByIdAndDelete(req.params.id);
    if (!deletedCommande) {
      return res.status(404).json({ error: "Commande non trouvée" });
    }
    res.status(200).json({ message: "Commande supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
