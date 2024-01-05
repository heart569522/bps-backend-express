const api2Model = require("../models/api2Model");

exports.getAllApi2 = async (req, res) => {
  try {
    const api2 = await api2Model.getAllApi2();
    res.json(api2);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching data" });
  }
};

exports.getApi2ById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const api2 = await api2Model.getApi2ById(id);
      if (!api2) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Error fetching data" });
    }
  };

exports.createApi2 = async (req, res) => {
  const data = req.body;

  try {
    const api2Id = await api2Model.createApi2(data);
    res.status(202).json({ message: "Data created successfully", api2Id });
  } catch (error) {
    console.error("Error creating data:", error.message);
    res.status(500).json({ error: "Error creating data" });
  }
};

exports.updateApi2 = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await api2Model.updateApi2(id, data);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.partialUpdateApi2 = async (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;

  try {
    const result = await api2Model.partialUpdateApi2(id, updatedFields);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data partially updated successfully", ID: id });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({ error: "Error updating data" });
  }
};

exports.deleteApi2 = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await api2Model.deleteApi2(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully", ID: id });
  } catch (error) {
    console.error("Error deleting data:", error.message);
    res.status(500).json({ error: "Error deleting data" });
  }
};
