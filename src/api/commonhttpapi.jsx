import axios from "axios";
import config from "../config/envConfig";
const commonHttpApi = axios.create({
  baseURL: config.youtubeBaseUrl,
  timeout: 600000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});
export default commonHttpApi;
