const api3Model = require("../models/api3Model");

exports.getAllApi3 = async (req, res) => {
  try {
    const api3 = await api3Model.getAllApi3();
    res.json(api3);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching data" });
  }
};

exports.getApi3ById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const api3 = await api3Model.getApi3ById(id);
      if (!api3) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Error fetching data" });
    }
  };

exports.createApi3 = async (req, res) => {
  const data = req.body;

  try {
    const api3Id = await api3Model.createApi3(data);
    res.status(203).json({ message: "Data created successfully", api3Id });
  } catch (error) {
    console.error("Error creating data:", error.message);
    res.status(500).json({ error: "Error creating data" });
  }
};

exports.updateApi3 = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await api3Model.updateApi3(id, data);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.partialUpdateApi3 = async (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;

  try {
    const result = await api3Model.partialUpdateApi3(id, updatedFields);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data partially updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.deleteApi3 = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await api3Model.deleteApi3(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully", ID: id });
  } catch (error) {
    console.error("Error deleting data:", error.message);
    res.status(500).json({ error: "Error deleting data" });
  }
};
