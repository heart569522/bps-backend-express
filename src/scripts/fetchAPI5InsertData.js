const axios = require("axios");
const api5Model = require("../models/api5Model");

const fetchAPI5InsertData = async () => {
  let api5Id;

  try {
    const response = await axios.get(
      "https://ebox.embedig.com/api.php?hwid=5736428&token=NTczNjQyOC1lYm94&IN1&time&p001&p002&p003&p004&p005&p006&p007&p008&p009&p010&p011&p012&p013&p014&p015&p016&p017&p018&p019&p020"
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
        p001: null,
        p002: null,
        p003: null,
        p004: null,
        p005: null,
        p006: null,
        p007: null,
        p008: null,
        p009: null,
        p010: null,
        p011: null,
        p012: null,
        p013: null,
        p014: null,
        p015: null,
        p016: null,
        p017: null,
        p018: null,
        p019: null,
        p020: null,
      };
      api5Id = await api5Model.createApi5(data);
      console.log("Data 0 inserted successfully. ID:", api5Id);
    }
  } catch (error) {
    console.error("Error fetching and inserting data:", error.message);
  }
};

module.exports = { fetchAPI5InsertData };
