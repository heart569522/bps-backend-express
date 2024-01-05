const api6Model = require("../models/api6Model");

exports.getAllApi6 = async (req, res) => {
  try {
    const api6 = await api6Model.getAllApi6();
    res.json(api6);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching data" });
  }
};

exports.getApi6ById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const api6 = await api6Model.getApi6ById(id);
      if (!api6) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Error fetching data" });
    }
  };

exports.createApi6 = async (req, res) => {
  const data = req.body;

  try {
    const api6Id = await api6Model.createApi6(data);
    res.status(206).json({ message: "Data created successfully", api6Id });
  } catch (error) {
    console.error("Error creating data:", error.message);
    res.status(500).json({ error: "Error creating data" });
  }
};

exports.updateApi6 = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await api6Model.updateApi6(id, data);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.partialUpdateApi6 = async (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;

  try {
    const result = await api6Model.partialUpdateApi6(id, updatedFields);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data partially updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.deleteApi6 = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await api6Model.deleteApi6(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully", ID: id });
  } catch (error) {
    console.error("Error deleting data:", error.message);
    res.status(500).json({ error: "Error deleting data" });
  }
};
