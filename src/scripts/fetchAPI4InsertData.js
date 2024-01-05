const axios = require("axios");
const api4Model = require("../models/api4Model");

const fetchAPI4InsertData = async () => {
  let api4Id;

  try {
    const response = await axios.get(
      "https://ebox.embedig.com/api.php?hwid=5729708&token=NTcyOTcwOC1lYm94&IN1&IN2&IN3&IN4&p221&p222"
    );

    if (
      response.data &&
      typeof response.data === "object" &&
      !("Error" in response.data)
    ) {
      const data = response.data;

      api4Id = await api4Model.createApi4(data);
      console.log("Data inserted successfully. ID:", api4Id);
    } else {
      console.log("Invalid or error response:", response.data);

      const data = {
        datetime: "0",
        IN1: "0",
        IN2: "0",
        IN3: "0",
        IN4: "0",
        p221: "0",
        p222: "0",
      };
      api4Id = await api4Model.createApi4(data);
      console.log("Data 0 inserted successfully. ID:", api4Id);
    }
  } catch (error) {
    console.error("Error fetching and inserting data:", error.message);
  }
};

module.exports = { fetchAPI4InsertData };
