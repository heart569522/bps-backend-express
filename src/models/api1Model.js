const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createApi1 = async (data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const sql = "INSERT INTO api1 (datetime, OUT1, record_at) VALUES (?, ?, CONVERT_TZ(NOW(), 'UTC', 'Asia/Bangkok'))";

    const [results] = await connection.query(sql, [data.datetime, data.OUT1]);
    return results.insertId;
  } finally {
    await connection.end();
  }
};

const getAllApi1 = async () => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("SELECT * FROM api1");
    return results;
  } finally {
    await connection.end();
  }
};

const getApi1ById = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(
      "SELECT * FROM api1 WHERE id = ?",
      [id]
    );
    return results[0];
  } finally {
    await connection.end();
  }
};

const updateApi1 = async (id, data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("UPDATE api1 SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

const partialUpdateApi1 = async (id, updatedFields) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const updateQuery = "UPDATE api1 SET ? WHERE id = ?";
    const [results] = await connection.query(updateQuery, [updatedFields, id]);
    return results;
  } finally {
    await connection.end();
  }
};

const deleteApi1 = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("DELETE FROM api1 WHERE id = ?", [
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

module.exports = {
  createApi1,
  getAllApi1,
  getApi1ById,
  updateApi1,
  partialUpdateApi1,
  deleteApi1,
};
