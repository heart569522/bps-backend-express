const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createApi2 = async (data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const sql = "INSERT INTO api2 (datetime, IN1, IN2, IN3, IN4, record_at) VALUES (?, ?, ?, ?, ?, CONVERT_TZ(NOW(), 'UTC', 'Asia/Bangkok'))";

    const [results] = await connection.query(sql, [data.datetime, data.IN1, data.IN2, data.IN3, data.IN4]);
    return results.insertId;
  } finally {
    await connection.end();
  }
};

const getAllApi2 = async () => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("SELECT * FROM api2");
    return results;
  } finally {
    await connection.end();
  }
};

const getApi2ById = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(
      "SELECT * FROM api2 WHERE id = ?",
      [id]
    );
    return results[0];
  } finally {
    await connection.end();
  }
};

const updateApi2 = async (id, data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("UPDATE api2 SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

const partialUpdateApi2 = async (id, updatedFields) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const updateQuery = "UPDATE api2 SET ? WHERE id = ?";
    const [results] = await connection.query(updateQuery, [updatedFields, id]);
    return results;
  } finally {
    await connection.end();
  }
};

const deleteApi2 = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("DELETE FROM api2 WHERE id = ?", [
      id,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

module.exports = {
  createApi2,
  getAllApi2,
  getApi2ById,
  updateApi2,
  partialUpdateApi2,
  deleteApi2,
};
