import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  postData(data) {
    return apiClient.post('/authentication', data)
  },
  postFile(data) {
    return apiClient.post('/file-upload', data)
  },
};
