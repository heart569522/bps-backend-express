const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createApi6 = async (data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("INSERT INTO api6 SET ?", data);
    return results.insertId;
  } finally {
    await connection.end();
  }
};

const getAllApi6 = async () => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("SELECT * FROM api6");
    return results;
  } finally {
    await connection.end();
  }
};

const getApi6ById = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(
      "SELECT * FROM api6 WHERE id = ?",
      [id]
    );
    return results[0];
  } finally {
    await connection.end();
  }
};

const updateApi6 = async (id, data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("UPDATE api6 SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

const partialUpdateApi6 = async (id, updatedFields) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const updateQuery = "UPDATE api6 SET ? WHERE id = ?";
    const [results] = await connection.query(updateQuery, [updatedFields, id]);
    return results;
  } finally {
    await connection.end();
  }
};

const deleteApi6 = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("DELETE FROM api6 WHERE id = ?", [
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

module.exports = {
  createApi6,
  getAllApi6,
  getApi6ById,
  updateApi6,
  partialUpdateApi6,
  deleteApi6,
};
