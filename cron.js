const fetchScripts = require("./src/scripts");

const runCronJob = () => {
    fetchScripts.runAllFetchScripts();
  };
  
  module.exports = { runCronJob };