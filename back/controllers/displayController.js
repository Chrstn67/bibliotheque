const Display = require("../models/Display");

// Get all displays
exports.getAllDisplays = async (req, res) => {
  try {
    const displays = await Display.find();
    res.status(200).json(displays);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Create a new display
exports.createDisplay = async (req, res) => {
  try {
    const newDisplay = new Display(req.body);
    const savedDisplay = await newDisplay.save();
    res.status(201).json(savedDisplay);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Get a single display by ID
exports.getDisplayById = async (req, res) => {
  try {
    const display = await Display.findById(req.params.id);
    if (!display) {
      return res.status(404).json({ error: "Affichage non trouvé" });
    }
    res.status(200).json(display);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Update a display by ID
exports.updateDisplay = async (req, res) => {
  try {
    const updatedDisplay = await Display.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDisplay) {
      return res.status(404).json({ error: "Affichage non trouvé" });
    }
    res.status(200).json(updatedDisplay);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Delete a display by ID
exports.deleteDisplay = async (req, res) => {
  try {
    const deletedDisplay = await Display.findByIdAndDelete(req.params.id);
    if (!deletedDisplay) {
      return res.status(404).json({ error: "Affichage non trouvé" });
    }
    res.status(200).json({ message: "Affichage supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
