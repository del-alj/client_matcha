const Logout = (setAuth) => {
  const token = localStorage.getItem("Token");

  if (token) {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("Token");
    localStorage.removeItem("userId");
    localStorage.removeItem("reported");

    setAuth({});
  } else console.log("error: there is no token but connected");
};

export { Logout };
