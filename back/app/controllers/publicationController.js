import Publication, { find, findById, findByIdAndUpdate, findByIdAndDelete } from "../models/Publication";

// Get all publications
export async function getAllPublications(req, res) {
  try {
    const publications = await find();
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Create a new publication
export async function createPublication(req, res) {
  try {
    const newPublication = new Publication(req.body);
    const savedPublication = await newPublication.save();
    res.status(201).json(savedPublication);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Get a single publication by ID
export async function getPublicationById(req, res) {
  try {
    const publication = await findById(req.params.id);
    if (!publication) {
      return res.status(404).json({ error: "Publication non trouvée" });
    }
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Update a publication by ID
export async function updatePublication(req, res) {
  try {
    const updatedPublication = await findByIdAndUpdate(
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
}

// Delete a publication by ID
export async function deletePublication(req, res) {
  try {
    const deletedPublication = await findByIdAndDelete(
      req.params.id
    );
    if (!deletedPublication) {
      return res.status(404).json({ error: "Publication non trouvée" });
    }
    res.status(200).json({ message: "Publication supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}
