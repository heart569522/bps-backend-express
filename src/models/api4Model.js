const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createApi4 = async (data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const sql = "INSERT INTO api4 (datetime, IN1, IN2, IN3, IN4, p221, p222, record_at) VALUES (?, ?, ?, ?, ?, ?, ?, CONVERT_TZ(NOW(), 'UTC', 'Asia/Bangkok'))";

    const [results] = await connection.query(sql, [data.datetime, data.IN1, data.IN2, data.IN3, data.IN4, data.p221, data.p222]);
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
