const axios = require("axios");
const api2Model = require("../models/api2Model");

const fetchAPI2InsertData = async () => {
  let api2Id;

  try {
    const response = await axios.get(
      "https://ebox.embedig.com/api.php?hwid=5729708&token=NTcyOTcwOC1lYm94&IN1&IN2&IN3&IN4",
      { timeout: process.env.FETCH_TIMEOUT }
    );

    if (
      response.data &&
      typeof response.data === "object" &&
      !("Error" in response.data)
    ) {
      const data = response.data;

      api2Id = await api2Model.createApi2(data);
      console.log("Data inserted successfully. ID:", api2Id);
    } else {
      console.log("Invalid or error response:", response.data);

      const data = {
        datetime: "0",
        IN1: "0",
        IN2: "0",
        IN3: "0",
        IN4: "0",
      };
      api2Id = await api2Model.createApi2(data);
      console.log("Data 0 inserted successfully. ID:", api2Id);
    }
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out:", error.message);

      const data = {
        datetime: "0",
        IN1: "0",
        IN2: "0",
        IN3: "0",
        IN4: "0",
      };
      api2Id = await api2Model.createApi2(data);
      console.log("Data 0 inserted due to timeout. ID:", api2Id);
    } else {
      console.error("Error fetching and inserting data:", error.message);
    }
  }
};

module.exports = { fetchAPI2InsertData };
