const axios = require("axios");
const api6Model = require("../models/api6Model");

const fetchAPI6InsertData = async () => {
  let api6Id;

  try {
    const response = await axios.get(
      "https://ebox.embedig.com/api.php?hwid=5729708&token=NTcyOTcwOC1lYm94&s201&s202&s203&s204&s205&s206&s207&s208&s209&s210",
      { timeout: process.env.FETCH_TIMEOUT }
    );

    if (
      response.data &&
      typeof response.data === "object" &&
      !("Error" in response.data)
    ) {
      const data = response.data;

      api6Id = await api6Model.createApi6(data);
      console.log("Data inserted successfully. ID:", api6Id);
    } else {
      console.log("Invalid or error response:", response.data);

      const data = {
        datetime: "0",
        s201: null,
        s202: null,
        s203: null,
        s204: null,
        s205: null,
        s206: null,
        s207: null,
        s208: null,
        s209: null,
        s210: null,
      };

      api6Id = await api6Model.createApi6(data);
      console.log("Data 0 inserted successfully. ID:", api6Id);
    }
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out:", error.message);

      const data = {
        datetime: "0",
        s201: null,
        s202: null,
        s203: null,
        s204: null,
        s205: null,
        s206: null,
        s207: null,
        s208: null,
        s209: null,
        s210: null,
      };
      api6Id = await api6Model.createApi6(data);
      console.log("Data 0 inserted due to timeout. ID:", api6Id);
    } else {
      console.error("Error fetching and inserting data:", error.message);
    }
  }
};

module.exports = { fetchAPI6InsertData };
