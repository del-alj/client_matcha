
import axiosInstance from "../services/AxiosInstance";

export const addNewUserInfo = async (url, params) => {
    axiosInstance
      .put(url, params)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
};