import axiosInstance from "../services/AxiosInstance";

export const likeThisUser = async (ids, setUserDetails) => {
  const url = "/likes";
  const param = { user_id: ids?.user_id, liker_id: ids?.suggestion_user_id };
  if (ids?.user_id && ids?.suggestion_user_id) {
    axiosInstance
      .put(url, param)
      .then((res) => {
        console.log(res?.data);
        setUserDetails((prev) => ({
          ...prev,
          likesList: [...prev.likesList, Number(ids?.user_id)],
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const unLikeThisUser = async (ids, setUserDetails) => {
  const url = `/likes/${ids?.user_id}/${ids?.suggestion_user_id}`;
  if (ids?.user_id && ids?.suggestion_user_id) {
    axiosInstance
      .delete(url)
      .then((res) => {
        console.log("unlike dones", res?.data);
        setUserDetails((prev) => {
          const newList = prev.likesList.filter((id) => id != ids?.user_id);

          return {
            ...prev,
            likesList: newList,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
