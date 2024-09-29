import Reader, { find, findById, findByIdAndUpdate, findByIdAndDelete } from "../models/Reader";

// Get all readers
export async function getAllReaders(req, res) {
  try {
    const readers = await find();
    res.status(200).json(readers);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Create a new reader
export async function createReader(req, res) {
  try {
    const newReader = new Reader(req.body);
    const savedReader = await newReader.save();
    res.status(201).json(savedReader);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Get a single reader by ID
export async function getReaderById(req, res) {
  try {
    const reader = await findById(req.params.id);
    if (!reader) {
      return res.status(404).json({ error: "Lecteur non trouvé" });
    }
    res.status(200).json(reader);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Update a reader by ID
export async function updateReader(req, res) {
  try {
    const updatedReader = await findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedReader) {
      return res.status(404).json({ error: "Lecteur non trouvé" });
    }
    res.status(200).json(updatedReader);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Delete a reader by ID
export async function deleteReader(req, res) {
  try {
    const deletedReader = await findByIdAndDelete(req.params.id);
    if (!deletedReader) {
      return res.status(404).json({ error: "Lecteur non trouvé" });
    }
    res.status(200).json({ message: "Lecteur supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}
