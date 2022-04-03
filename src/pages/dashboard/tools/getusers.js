import axiosInstance from "../../../services/AxiosInstance";
export const getListUsers = async (user_id, setUsersList) => {
  const url = `/browsing/${user_id}`;
  await axiosInstance
    .get(url)
    .then((res) => {
      setUsersList(res?.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
