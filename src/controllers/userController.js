const userModel = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Error fetching users" });
  }
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ error: "Error fetching user" });
  }
};

exports.createUser = async (req, res) => {
  const data = req.body;

  try {
    const userId = await userModel.createUser(data);
    res.status(201).json({ message: "User created successfully", userId });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Error creating user" });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await userModel.updateUser(id, data);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User updated successfully", userId: id });
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ error: "Error updating user" });
  }
};

exports.partialUpdateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedFields = req.body;

  try {
    const result = await userModel.partialUpdateUser(userId, updatedFields);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User partially updated successfully", userId });
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ error: "Error updating user" });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await userModel.deleteUser(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully", userId: id });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ error: "Error deleting user" });
  }
};
