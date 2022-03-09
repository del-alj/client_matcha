import axios from "axios";

const newAccessToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem("Token");
    req.headers["content-Type"] = "application/json";
    req.headers["Authorization"] = `Bearer ${accessToken}`;
    // console.log("test", accessToken);
    req.params = req.params || {};
    // console.log(req);
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
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/login/refreshtoken`, data)
      .then((res) => {
        localStorage.setItem("Token", res.data.accessToken);
      })
      .catch((err) => {
        console.error("err done ");
      });
  }
);

export default axiosInstance;
