import axiosInstance from "../../services/AxiosInstance";

export const getNotification = async (url, setNotifications) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      console.log("get notification function");
      if (res?.data?.length === 0) {
        setNotifications(null);
      } else {
        setNotifications(res?.data);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getNotificationStatus = async (url, setStatus) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      if (res?.data?.length > 0 && res?.data[0]?.status === true ){
        setStatus(true);
      } else {

        setStatus(false);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};




export const getIfMsgNotification = async (url, setMsgStatus) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      if (res?.data?.length === 0) {
        setMsgStatus(false);
      } else {
        setMsgStatus(true);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};




export const updateNotificationStatus = async (url, setNotifications) => {
  await axiosInstance
    .put(url)
    .then((res) => {
      console.log("update notification function");
      if (res?.data?.length === 0) {
        setNotifications(null);
      } else setNotifications(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
