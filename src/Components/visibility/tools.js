import axiosInstance from "../../services/AxiosInstance";
import moment from "moment";

export const getDisconnectAt = async (url, setStatus) => {
  console.log(url);
  await axiosInstance
    .get(url)
    .then((res) => {
      const temp = moment().startOf(res?.data).fromNow();
      if (res?.data) setStatus(temp);
    })
    .catch((err) => {
      console.error(err);
    });
};
