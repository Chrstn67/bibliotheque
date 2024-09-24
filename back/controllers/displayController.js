const Display = require("../models/Display");

exports.createDisplay = async (req, res) => {
  try {
    const display = await Display.create(req.body);
    res.status(201).json(display);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllDisplays = async (req, res) => {
  try {
    const displays = await Display.find();
    res.json(displays);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDisplayById = async (req, res) => {
  try {
    const display = await Display.findById(req.params.id);
    res.json(display);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDisplay = async (req, res) => {
  try {
    const display = await Display.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(display);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDisplay = async (req, res) => {
  try {
    await Display.findByIdAndDelete(req.params.id);
    res.json({ message: "Affiche supprimée avec succès" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
