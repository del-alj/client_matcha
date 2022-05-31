import axiosInstance from "../services/AxiosInstance";

/* get user Messages */

export const getMessages = async (url, setMessages) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      setMessages(res?.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getListRooms = async (url, setConversations) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      console.log("55");
      setConversations(res?.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const updateListRooms = async (url) => {
  await axiosInstance
    .put(url)
    .then((res) => {
      console.log("55");
    })
    .catch((err) => {
      console.error(err);
    });
};
