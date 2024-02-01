const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createApi5 = async (data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const sql =
      "INSERT INTO api5 (datetime, p001, p002, p003, p004, p005, p006, p007, p008, p009, p010, p011, p012, p013, p014, p015, p016, p017, p018, p019, p020, record_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CONVERT_TZ(NOW(), 'UTC', 'Asia/Bangkok'))";

    const [results] = await connection.query(sql, [
      data.datetime,
      data.p001,
      data.p002,
      data.p003,
      data.p004,
      data.p005,
      data.p006,
      data.p007,
      data.p008,
      data.p009,
      data.p010,
      data.p011,
      data.p012,
      data.p013,
      data.p014,
      data.p015,
      data.p016,
      data.p017,
      data.p018,
      data.p019,
      parseFloat(data.p020).toFixed(4)
    ]);
    console.log("🚀 ~ createApi5 ~ results:", results)
    return results.insertId;
  } catch (error) {
    console.error("Error during database operation:", error);
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
