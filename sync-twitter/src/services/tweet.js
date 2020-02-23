const callAPI = require("./api");

getTweetsByHashtag = async (token, hashtag) => {
  const response = await callAPI(token).get(
    `/1.1/search/tweets.json?q=%23${hashtag}&result_type=recent`
  );

  return response.data;
};

module.exports = getTweetsByHashtag;
