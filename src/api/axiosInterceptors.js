const axios = require("axios");

axios.interceptors.request.use(
  (req) => {
    if (req.url.includes("login")) {
      console.log("from axios interceptors");
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
