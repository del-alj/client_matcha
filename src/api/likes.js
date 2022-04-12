import axiosInstance from "../services/AxiosInstance";

export const likeThisUser = async (ids) => {
  const url = "/likes";
  const param = { user_id: ids?.user_id, liker_id: ids?.suggestion_user_id };
  if (ids?.user_id && ids?.suggestion_user_id) {
    axiosInstance
      .put(url, param)
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const unLikeThisUser = async (ids) => {
  const url = "/likes";
  const param = { user_id: ids?.user_id, liker_id: ids?.suggestion_user_id };
  if (ids?.user_id && ids?.suggestion_user_id) {
    axiosInstance
      .delete(url, param)
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
