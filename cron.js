const fetchScripts = require("./src/scripts");

const runCronJob = async () => {
  const result = await fetchScripts.runAllFetchScripts();
  return result;
};

module.exports = { runCronJob };
