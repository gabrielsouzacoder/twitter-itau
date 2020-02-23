const api = require("./api");

async function getToken() {
  var response = await api({
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

  return response.data.access_token;
}

module.exports = getToken;
