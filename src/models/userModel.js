const mysql = require("mysql2/promise");
const { dbConfig } = require("../../db");

const createUser = async (user) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("INSERT INTO users SET ?", user);
    return results.insertId;
  } finally {
    await connection.end();
  }
};

const getAllUsers = async () => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("SELECT * FROM users");
    return results;
  } finally {
    await connection.end();
  }
};

const getUserById = async (userId) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(
      "SELECT * FROM users WHERE id = ?",
      [userId]
    );
    return results[0];
  } finally {
    await connection.end();
  }
};

const updateUser = async (userId, data) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(
      "UPDATE users SET ? WHERE id = ?",
      [data, userId]
    );
    return results;
  } finally {
    await connection.end();
  }
};

const partialUpdateUser = async (userId, updatedFields) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const updateQuery = "UPDATE users SET ? WHERE id = ?";
    const [results] = await connection.query(updateQuery, [
      updatedFields,
      userId,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

const deleteUser = async (userId) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query("DELETE FROM users WHERE id = ?", [
      userId,
    ]);
    return results;
  } finally {
    await connection.end();
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  partialUpdateUser,
  deleteUser,
};
