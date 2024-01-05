const api5Model = require("../models/api5Model");

exports.getAllApi5 = async (req, res) => {
  try {
    const api5 = await api5Model.getAllApi5();
    res.json(api5);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching data" });
  }
};

exports.getApi5ById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const api5 = await api5Model.getApi5ById(id);
      if (!api5) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Error fetching data" });
    }
  };

exports.createApi5 = async (req, res) => {
  const data = req.body;

  try {
    const api5Id = await api5Model.createApi5(data);
    res.status(205).json({ message: "Data created successfully", api5Id });
  } catch (error) {
    console.error("Error creating data:", error.message);
    res.status(500).json({ error: "Error creating data" });
  }
};

exports.updateApi5 = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await api5Model.updateApi5(id, data);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.partialUpdateApi5 = async (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;

  try {
    const result = await api5Model.partialUpdateApi5(id, updatedFields);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data partially updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.deleteApi5 = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await api5Model.deleteApi5(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully", ID: id });
  } catch (error) {
    console.error("Error deleting data:", error.message);
    res.status(500).json({ error: "Error deleting data" });
  }
};
