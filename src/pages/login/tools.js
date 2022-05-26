import axios from "axios";

export const getUserConfirm = async (url, setAuth) => {
  axios
    .put(url)
    .then((res) => {
      // setAuth in localstorage
      localStorage.setItem("Token", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("userId", JSON.stringify(res.data?.user?.user_id));
      localStorage.setItem("reported", res.data?.user?.reported);
      setAuth((prev) => ({
        ...prev,
        token: res.data.accessToken,
        userId: res.data?.user?.user_id,
        reported: res.data?.user?.reported ?? false,
      }));
    })
    .catch((err) => {
      console.log(err);
    });
};
