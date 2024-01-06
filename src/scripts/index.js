const { fetchAPI1InsertData } = require("./fetchAPI1InsertData");
const { fetchAPI2InsertData } = require("./fetchAPI2InsertData");
const { fetchAPI3InsertData } = require("./fetchAPI3InsertData");
const { fetchAPI4InsertData } = require("./fetchAPI4InsertData");
const { fetchAPI5InsertData } = require("./fetchAPI5InsertData");
const { fetchAPI6InsertData } = require("./fetchAPI6InsertData");

const runAllFetchScripts = async () => {
  try {
    await fetchAPI1InsertData();
    await fetchAPI2InsertData();
    await fetchAPI3InsertData();
    await fetchAPI4InsertData();
    await fetchAPI5InsertData();
    await fetchAPI6InsertData();

    return { success: true, message: "Fetch scripts completed successfully" };
  } catch (error) {
    console.error("Error fetching scripts:", error.message);
    return { success: false, message: "Error fetching scripts" };
  }
};

module.exports = {
  runAllFetchScripts,
};
