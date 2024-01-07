const axios = require("axios");
const api5Model = require("../models/api5Model");

const fetchAPI5InsertData = async () => {
  let api5Id;

  try {
    const response = await axios.get(
      "https://ebox.embedig.com/api.php?hwid=5736428&token=NTczNjQyOC1lYm94&IN1&time&p001&p002&p003&p004&p005&p006&p007&p008&p009&p010&p011&p012&p013&p014&p015&p016&p017&p018&p019&p020",
      { timeout: 8000 }
    );

    if (
      response.data &&
      typeof response.data === "object" &&
      !("Error" in response.data)
    ) {
      const data = response.data;

      api5Id = await api5Model.createApi5(data);
      console.log("Data inserted successfully. ID:", api5Id);
    } else {
      console.log("Invalid or error response:", response.data);

      const data = {
        datetime: "0",
        p001: "0",
        p002: "0",
        p003: "0",
        p004: "0",
        p005: "0",
        p006: "0",
        p007: "0",
        p008: "0",
        p009: "0",
        p010: "0",
        p011: "0",
        p012: "0",
        p013: "0",
        p014: "0",
        p015: "0",
        p016: "0",
        p017: "0",
        p018: "0",
        p019: "0",
        p020: "0",
      };
      api5Id = await api5Model.createApi5(data);
      console.log("Data 0 inserted successfully. ID:", api5Id);
    }
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out:", error.message);

      const data = {
        datetime: "0",
        p001: "0",
        p002: "0",
        p003: "0",
        p004: "0",
        p005: "0",
        p006: "0",
        p007: "0",
        p008: "0",
        p009: "0",
        p010: "0",
        p011: "0",
        p012: "0",
        p013: "0",
        p014: "0",
        p015: "0",
        p016: "0",
        p017: "0",
        p018: "0",
        p019: "0",
        p020: "0",
      };
      api5Id = await api5Model.createApi5(data);
      console.log("Data 0 inserted due to timeout. ID:", api5Id);
    } else {
      console.error("Error fetching and inserting data:", error.message);
    }
  }
};

module.exports = { fetchAPI5InsertData };
