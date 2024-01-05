const api1Model = require("../models/api1Model");

exports.getAllApi1 = async (req, res) => {
  try {
    const api1 = await api1Model.getAllApi1();
    res.json(api1);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching data" });
  }
};

exports.getApi1ById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const api1 = await api1Model.getApi1ById(id);
      if (!api1) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Error fetching data" });
    }
  };

exports.createApi1 = async (req, res) => {
  const data = req.body;

  try {
    const api1Id = await api1Model.createApi1(data);
    res.status(201).json({ message: "Data created successfully", api1Id });
  } catch (error) {
    console.error("Error creating data:", error.message);
    res.status(500).json({ error: "Error creating data" });
  }
};

exports.updateApi1 = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await api1Model.updateApi1(id, data);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.partialUpdateApi1 = async (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;

  try {
    const result = await api1Model.partialUpdateApi1(id, updatedFields);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data partially updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.deleteApi1 = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await api1Model.deleteApi1(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully", ID: id });
  } catch (error) {
    console.error("Error deleting data:", error.message);
    res.status(500).json({ error: "Error deleting data" });
  }
};
