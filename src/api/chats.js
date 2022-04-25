import axiosInstance from "../services/AxiosInstance";

/* get user Messages */

export const getMessages = async (url, setMessages) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      console.log("this is all user Messages", res.data);
      setMessages(res?.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
