import axios from "axios";
import { getCookie } from "cookies-next";

const token = getCookie("token");

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

if (token) {
  api.defaults.headers.common = { Authorization: `bearer ${token}` };
}

export default api;
