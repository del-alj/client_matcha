import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem("Token");
    req.headers["content-Type"] = "application/json";
    req.headers["Authorization"] = `Bearer ${accessToken}`;
    req.params = req.params || {};
    return req;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const data = {
      refreshToken: localStorage.getItem("refreshToken"),
    };

    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/login/refreshtoken`, data)
        .then((res) => {
          localStorage.setItem("Token", res.data.accessToken);
        });
      return axiosInstance(originalRequest);
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
