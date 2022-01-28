const axios = require("axios");

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = {
  headers: {
    "content-Type": "application/json",
  },
};

export const confirm = async (req) => {
  const token = req;
  try {
    const response = await axios({
      headers,
      method: "put",
      url: `${BASE_URL}/confirm/${token}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
  return true;
};
