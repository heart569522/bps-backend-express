const api4Model = require("../models/api4Model");

exports.getAllApi4 = async (req, res) => {
  try {
    const api4 = await api4Model.getAllApi4();
    res.json(api4);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching data" });
  }
};

exports.getApi4ById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const api4 = await api4Model.getApi4ById(id);
      if (!api4) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Error fetching data" });
    }
  };

exports.createApi4 = async (req, res) => {
  const data = req.body;

  try {
    const api4Id = await api4Model.createApi4(data);
    res.status(204).json({ message: "Data created successfully", api4Id });
  } catch (error) {
    console.error("Error creating data:", error.message);
    res.status(500).json({ error: "Error creating data" });
  }
};

exports.updateApi4 = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await api4Model.updateApi4(id, data);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.partialUpdateApi4 = async (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;

  try {
    const result = await api4Model.partialUpdateApi4(id, updatedFields);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data partially updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.deleteApi4 = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await api4Model.deleteApi4(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully", ID: id });
  } catch (error) {
    console.error("Error deleting data:", error.message);
    res.status(500).json({ error: "Error deleting data" });
  }
};
