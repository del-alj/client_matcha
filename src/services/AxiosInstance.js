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
    console.log("test", accessToken);
    req.params = req.params || {};
    console.log(req);
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
  async (error) => {
    if (error.res) {
      if (error.res.status === 401) {
        const data = {
          refreshToken: localStorage.getItem("refreshToken"),
          userId: localStorage.getItem("userId"),
        };

        axios
          .post(`${process.env.REACT_APP_BASE_URL}/login/refreshtoken`, data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });
        // Do something, call refreshToken() request for example;
        // newAccessToken()
        // return req
        // return axios_instance(res);
      } else {
        // Do something
        console.log(error);
        return Promise.reject(error.res.data);
      }
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
