const Publication = require("../models/Publication");

exports.createPublication = async (req, res) => {
  try {
    const publication = await Publication.create(req.body);
    res.status(201).json(publication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find();
    res.json(publications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    res.json(publication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePublication = async (req, res) => {
  try {
    const publication = await Publication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(publication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePublication = async (req, res) => {
  try {
    await Publication.findByIdAndDelete(req.params.id);
    res.json({ message: "Publication supprimée avec succès" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
