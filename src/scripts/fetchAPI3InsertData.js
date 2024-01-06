const axios = require("axios");
const api3Model = require("../models/api3Model");

const fetchAPI3InsertData = async () => {
  let api3Id;

  try {
    const response = await axios.get(
      "https://ebox.embedig.com/api.php?hwid=5729708&token=NTcyOTcwOC1lYm94&IN1&IN2&IN3&IN4&OUT4=1",
      { timeout: 5000 }
    );

    if (
      response.data &&
      typeof response.data === "object" &&
      !("Error" in response.data)
    ) {
      const data = response.data;

      api3Id = await api3Model.createApi3(data);
      console.log("Data inserted successfully. ID:", api3Id);
    } else {
      console.log("Invalid or error response:", response.data);

      const data = {
        datetime: "0",
        IN1: "0",
        IN2: "0",
        IN3: "0",
        IN4: "0",
        OUT4: "0",
      };
      api3Id = await api3Model.createApi3(data);
      console.log("Data 0 inserted successfully. ID:", api3Id);
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
        OUT4: "0",
      };
      api3Id = await api3Model.createApi3(data);
      console.log("Data 0 inserted due to timeout. ID:", api3Id);
    } else {
      console.error("Error fetching and inserting data:", error.message);
    }
  }
};

module.exports = { fetchAPI3InsertData };
