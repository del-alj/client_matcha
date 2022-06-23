
import axiosInstance from "../services/AxiosInstance";

export const addNewUserInfo = async (url, params) => {
    axiosInstance
      .put(url, params)
      .then((res) => {
        console.log(res?.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
};