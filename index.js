require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql2')
const cors = require("cors");
const cron = require("node-cron");
const { dbConfig } = require("./db");

// const userRoutes = require("./src/routes/userRouter");
const api1Routes = require("./src/routes/api1Router");
const api2Routes = require("./src/routes/api2Router");
const api3Routes = require("./src/routes/api3Router");
const api4Routes = require("./src/routes/api4Router");
const api5Routes = require("./src/routes/api5Router");
const api6Routes = require("./src/routes/api6Router");

const fetchScripts = require("./src/scripts");

const app = express();
const port = 8000;

const initMySQL = async () => {
  conn = await mysql.createConnection(dbConfig);
};

app.use(bodyParser.json());
app.use(cors());

// app.use("/api/user", userRoutes);
app.use("/api/api1", api1Routes);
app.use("/api/api2", api2Routes);
app.use("/api/api3", api3Routes);
app.use("/api/api4", api4Routes);
app.use("/api/api5", api5Routes);
app.use("/api/api6", api6Routes);

app.get("/api", (req, res) => {
  res.send("Hello BPS");
});

cron.schedule("*/5 * * * *", () => {
  fetchScripts.runAllFetchScripts();
});

app.listen(port, async () => {
  await initMySQL();
  console.log("http server run at : " + port);
});
