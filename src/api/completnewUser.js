
import axiosInstance from "../services/AxiosInstance";

export const addNewUserInfo = async (url, params, history) => {
    axiosInstance
      .put(url, params)
      .then((res) => {
        history.push("/profile")
      })
      .catch((err) => {
        console.log(err);
      });
};