const axios = require("axios");

export async function registration() {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:7000/registration",
      data: {
        userName: "ff",
        firstName: "Fred",
        lastName: "Flintstone",
        email: "test@hdhd",
        password: "hdhdkd",
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
