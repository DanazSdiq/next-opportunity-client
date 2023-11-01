import axios from "axios";
import config from "../config";

const fetch = axios.create({
  baseURL: config.REACT_APP_SERVER_URL,
  timeout: 20000,
  headers: { "Content-Type": "application/json" }
});

export { fetch };
