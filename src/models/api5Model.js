const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createApi5 = async (data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("INSERT INTO api5 SET ?", data);
    return results.insertId;
  } finally {
    await connection.end();
  }
};

const getAllApi5 = async () => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("SELECT * FROM api5");
    return results;
  } finally {
    await connection.end();
  }
};

const getApi5ById = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(
      "SELECT * FROM api5 WHERE id = ?",
      [id]
    );
    return results[0];
  } finally {
    await connection.end();
  }
};

const updateApi5 = async (id, data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("UPDATE api5 SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

const partialUpdateApi5 = async (id, updatedFields) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const updateQuery = "UPDATE api5 SET ? WHERE id = ?";
    const [results] = await connection.query(updateQuery, [updatedFields, id]);
    return results;
  } finally {
    await connection.end();
  }
};

const deleteApi5 = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("DELETE FROM api5 WHERE id = ?", [
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

module.exports = {
  createApi5,
  getAllApi5,
  getApi5ById,
  updateApi5,
  partialUpdateApi5,
  deleteApi5,
};
