import { useState, useEffect } from "react";

const axios = require("axios");

const BASE_URL = process.env.REACT_APP_BASE_URL;

const useGetReqHook = (url, method, headers) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   axios({
  //     headers,
  //     method: method,
  //     url: `${BASE_URL}/${url}`,
  //   })
  //     .then((res) => {
  //       setData(res.data);
  //       setIsPending(false);
  //       setError(null);
  //       return res?.data.json();
  //     })
  //     .catch((err) => {
  //       setIsPending(false);
  //       setError(err.message);
  //     });
  // });

  // axios
  //   .get(`${BASE_URL}/${url}`, headers)
  //   .then((res) => {
  //     setData(res.data);
  //     setIsPending(false);
  //     setError(null);
  //     return res.send("ok");
  //   })
  //   .catch((err) => {
  //     setIsPending(false);
  //     setError(err.message);
  //   });

  axios
    .get(url, headers)
    .then((res) => {
      setData(res.data);
      setIsPending(false);
      setError(null);
      return res?.data;
    })
    .catch((err) => {
      setIsPending(false);
      //     setError(err.message);
      console.log(err);
    });
  // });
  return { data, isPending, error };
};

export default useGetReqHook;
