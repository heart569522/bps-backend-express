require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const { dbConfig } = require("./db");
const { runCronJob } = require("./cron");
// const axios = require("axios");
// const apiRoutes = ["/api/api1", "/api/api2", "/api/api3", "/api/api4", "/api/api5", "/api/api6"];

const api1Routes = require("./src/routes/api1Router");
const api2Routes = require("./src/routes/api2Router");
const api3Routes = require("./src/routes/api3Router");
const api4Routes = require("./src/routes/api4Router");
const api5Routes = require("./src/routes/api5Router");
const api6Routes = require("./src/routes/api6Router");

const app = express();
const port = 8000;

// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const initMySQL = async () => {
  conn = await mysql.createConnection(dbConfig);
};

app.use(bodyParser.json());
app.use(cors());

app.use("/api/api1", api1Routes);
app.use("/api/api2", api2Routes);
app.use("/api/api3", api3Routes);
app.use("/api/api4", api4Routes);
app.use("/api/api5", api5Routes);
app.use("/api/api6", api6Routes);

// app.get('/socket', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on("connection", async (socket) => {
//   console.log("A socket connected");

//   try {
//     // Fetch data from each API endpoint
//     for (const route of apiRoutes) {
//       const apiData = await axios.get(`${process.env.SERVER_BASE_URL}${route}`);
//       socket.emit(`${route}-data`, apiData.data);
//       console.log(apiData.data);
//       console.log(route);
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }

//   socket.on("disconnect", () => {
//     console.log("A socket disconnected");
//   });
// });

app.get("/cron", async (req, res) => {
  try {
    const result = await runCronJob();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error running cron job:", error.message);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
});

app.get("/api", (req, res) => {
  res.send("Hello BPS");
});

app.listen(port, async () => {
  await initMySQL();
  console.log("Server listening on port", port);
});
