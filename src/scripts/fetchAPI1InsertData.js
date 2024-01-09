const axios = require("axios");
const api1Model = require("../models/api1Model");

const fetchAPI1InsertData = async () => {
  let api1Id;

  try {
    const response = await axios.get(
      "https://ebox.embedig.com/api.php?hwid=5729708&token=NTcyOTcwOC1lYm94&OUT1=0",
      { timeout: process.env.FETCH_TIMEOUT }
    );

    if (
      response.data &&
      typeof response.data === "object" &&
      !("Error" in response.data)
    ) {
      const data = response.data;

      api1Id = await api1Model.createApi1(data);
      console.log("Data inserted successfully. ID:", api1Id);
    } else {
      console.log("Invalid or error response:", response.data);

      const data = { datetime: "0", OUT1: "0" };
      api1Id = await api1Model.createApi1(data);
      console.log("Data 0 inserted successfully. ID:", api1Id);
    }
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out:", error.message);

      const data = { datetime: "0", OUT1: "0" };
      api1Id = await api1Model.createApi1(data);
      console.log("Data 0 inserted due to timeout. ID:", api1Id);
    } else {
      console.error("Error fetching and inserting data:", error.message);
    }
  }
};

module.exports = { fetchAPI1InsertData };
