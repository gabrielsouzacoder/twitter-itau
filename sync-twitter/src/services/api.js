var axios = require("axios");
var getToken = require("./auth");

function callAPI(token) {
  const api = axios.create({
    baseURL: "https://api.twitter.com",
    headers: {
      Authorization: token
    }
  });

  return api;
}

module.exports = callAPI;
