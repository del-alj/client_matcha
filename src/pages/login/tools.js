import axios from "axios";

export const getUserConfirm = async (url, setAuth) => {
  axios
  .put(url)
  .then((res) => {
    // setAuth in localstorage
    localStorage.setItem("Token", res?.data?.accessToken);
    localStorage.setItem("refreshToken", res?.data?.refreshToken);
    localStorage.setItem("userId", JSON.stringify(res?.data?.user?.user_id));
    setAuth((prev) => ({
      ...prev,
      token: res?.data?.accessToken,
      userId: res?.data?.user?.user_id,
    }));
  })
  .catch((err) => {
      console.log(err);
    });
};
