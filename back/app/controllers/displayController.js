import Display, { find, findById, findByIdAndUpdate, findByIdAndDelete } from "../models/Display";

// Get all displays
export async function getAllDisplays(req, res) {
  try {
    const displays = await find();
    res.status(200).json(displays);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Create a new display
export async function createDisplay(req, res) {
  try {
    const newDisplay = new Display(req.body);
    const savedDisplay = await newDisplay.save();
    res.status(201).json(savedDisplay);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Get a single display by ID
export async function getDisplayById(req, res) {
  try {
    const display = await findById(req.params.id);
    if (!display) {
      return res.status(404).json({ error: "Affichage non trouvé" });
    }
    res.status(200).json(display);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Update a display by ID
export async function updateDisplay(req, res) {
  try {
    const updatedDisplay = await findByIdAndUpdate(
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
}

// Delete a display by ID
export async function deleteDisplay(req, res) {
  try {
    const deletedDisplay = await findByIdAndDelete(req.params.id);
    if (!deletedDisplay) {
      return res.status(404).json({ error: "Affichage non trouvé" });
    }
    res.status(200).json({ message: "Affichage supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}
