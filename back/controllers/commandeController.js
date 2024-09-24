const Commande = require("../models/Commande");

exports.createCommande = async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    res.status(201).json(commande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.json(commandes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }
    res.json(commande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!commande) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }
    res.json(commande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);
    if (!commande) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }
    res.json({ message: "Commande supprimée avec succès" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
