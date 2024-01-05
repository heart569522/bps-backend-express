const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createApi4 = async (data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("INSERT INTO api4 SET ?", data);
    return results.insertId;
  } finally {
    await connection.end();
  }
};

const getAllApi4 = async () => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("SELECT * FROM api4");
    return results;
  } finally {
    await connection.end();
  }
};

const getApi4ById = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(
      "SELECT * FROM api4 WHERE id = ?",
      [id]
    );
    return results[0];
  } finally {
    await connection.end();
  }
};

const updateApi4 = async (id, data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("UPDATE api4 SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

const partialUpdateApi4 = async (id, updatedFields) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const updateQuery = "UPDATE api4 SET ? WHERE id = ?";
    const [results] = await connection.query(updateQuery, [updatedFields, id]);
    return results;
  } finally {
    await connection.end();
  }
};

const deleteApi4 = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("DELETE FROM api4 WHERE id = ?", [
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

module.exports = {
  createApi4,
  getAllApi4,
  getApi4ById,
  updateApi4,
  partialUpdateApi4,
  deleteApi4,
};
