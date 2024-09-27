const Publication = require("../models/Publication");

// Get all publications
exports.getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find();
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Create a new publication
exports.createPublication = async (req, res) => {
  try {
    const newPublication = new Publication(req.body);
    const savedPublication = await newPublication.save();
    res.status(201).json(savedPublication);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Get a single publication by ID
exports.getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) {
      return res.status(404).json({ error: "Publication non trouvée" });
    }
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Update a publication by ID
exports.updatePublication = async (req, res) => {
  try {
    const updatedPublication = await Publication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPublication) {
      return res.status(404).json({ error: "Publication non trouvée" });
    }
    res.status(200).json(updatedPublication);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Delete a publication by ID
exports.deletePublication = async (req, res) => {
  try {
    const deletedPublication = await Publication.findByIdAndDelete(
      req.params.id
    );
    if (!deletedPublication) {
      return res.status(404).json({ error: "Publication non trouvée" });
    }
    res.status(200).json({ message: "Publication supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
