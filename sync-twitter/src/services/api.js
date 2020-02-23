import axios from "axios";

const api = axios.create({
  baseURL: "https://api.twitter.com"
});

export default api;
