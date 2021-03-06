import { useState, useEffect } from 'react';

const axios = require('axios');

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = {
  headers: {
    'content-Type': 'application/json',
  },
};

const useReqHook = (url, method) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios({
      headers,
      method: method,
      url: `${BASE_URL}/${url}`,
    })
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setError(null);
        return res.data.json();
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  });
  return { data, isPending, error };
};

export default useReqHook;
