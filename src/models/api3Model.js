const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createApi3 = async (data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const sql = "INSERT INTO api3 (datetime, IN1, IN2, IN3, IN4, OUT4, record_at) VALUES (?, ?, ?, ?, ?, ?, CONVERT_TZ(NOW(), 'UTC', 'Asia/Bangkok'))";

    const [results] = await connection.query(sql, [data.datetime, data.IN1, data.IN2, data.IN3, data.IN4, data.OUT4]);
    return results.insertId;
  } finally {
    await connection.end();
  }
};

const getAllApi3 = async () => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("SELECT * FROM api3");
    return results;
  } finally {
    await connection.end();
  }
};

const getApi3ById = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(
      "SELECT * FROM api3 WHERE id = ?",
      [id]
    );
    return results[0];
  } finally {
    await connection.end();
  }
};

const updateApi3 = async (id, data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("UPDATE api3 SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

const partialUpdateApi3 = async (id, updatedFields) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const updateQuery = "UPDATE api3 SET ? WHERE id = ?";
    const [results] = await connection.query(updateQuery, [updatedFields, id]);
    return results;
  } finally {
    await connection.end();
  }
};

const deleteApi3 = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("DELETE FROM api3 WHERE id = ?", [
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

module.exports = {
  createApi3,
  getAllApi3,
  getApi3ById,
  updateApi3,
  partialUpdateApi3,
  deleteApi3,
};
