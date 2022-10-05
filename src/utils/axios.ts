import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_API_KEY;
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

export default axiosInstance;
