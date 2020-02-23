const axios = require("axios");

getToken = async () => {
  var response = await axios({
    baseURL: "https://api.twitter.com",
    method: "post",
    url: "/oauth2/token",
    params: {
      grant_type: "client_credentials"
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD
    }
  });

  return `Bearer ${response.data.access_token}`;
};

module.exports = getToken;
