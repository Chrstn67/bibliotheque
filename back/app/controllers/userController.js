import User, { find, findById, findByIdAndUpdate, findByIdAndDelete } from "../models/User";

// Get all users
export async function getAllUsers(req, res) {
  try {
    const users = await find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Create a new user
export async function createUser(req, res) {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Get a single user by ID
export async function getUserById(req, res) {
  try {
    const user = await findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Update a user by ID
export async function updateUser(req, res) {
  try {
    const updatedUser = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// Delete a user by ID
export async function deleteUser(req, res) {
  try {
    const deletedUser = await findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}
