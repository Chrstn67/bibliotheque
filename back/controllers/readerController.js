const Reader = require("../models/Proclamateur");

exports.createReader = async (req, res) => {
  try {
    const reader = await Reader.create(req.body);
    res.status(201).json(reader);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllReaders = async (req, res) => {
  try {
    const readers = await Reader.find();
    res.json(readers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReaderById = async (req, res) => {
  try {
    const reader = await Reader.findById(req.params.id);
    res.json(reader);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateReader = async (req, res) => {
  try {
    const reader = await Reader.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(reader);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteReader = async (req, res) => {
  try {
    await Reader.findByIdAndDelete(req.params.id);
    res.json({ message: "Proclamateur supprimé avec succès" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
