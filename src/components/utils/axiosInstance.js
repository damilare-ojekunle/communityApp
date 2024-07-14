// axiosInstance.js
import axios from "axios";
import config from "../../../config";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: config.baseURL, // Replace with your API base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from local storage or any other secure storage
    const token = JSON.parse(localStorage.getItem("userData")).token;

    if (token) {
      // Add the Authorization header to the request
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
