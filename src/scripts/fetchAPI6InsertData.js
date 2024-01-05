const axios = require("axios");
const api6Model = require("../models/api6Model");

const fetchAPI6InsertData = async () => {
  let api6Id;

  try {
    const response = await axios.get(
      "https://ebox.embedig.com/api.php?hwid=5729708&token=NTcyOTcwOC1lYm94&s201&s202&s203&s204&s205&s206&s207&s208&s209&s210"
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
        s201: "0",
        s202: "0",
        s203: "0",
        s204: "0",
        s205: "0",
        s206: "0",
        s207: "0",
        s208: "0",
        s209: "0",
        s210: "0",
      };

      api6Id = await api6Model.createApi6(data);
      console.log("Data 0 inserted successfully. ID:", api6Id);
    }
  } catch (error) {
    console.error("Error fetching and inserting data:", error.message);
  }
};

module.exports = { fetchAPI6InsertData };
