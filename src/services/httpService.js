import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  put: app.put,
};

export default http;
