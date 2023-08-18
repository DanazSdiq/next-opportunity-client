import axios from "axios";

const fetch = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 20000,
  headers: { "Content-Type": "application/json" }
});

export { fetch };
