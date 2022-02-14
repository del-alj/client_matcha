const Logout = (history) => {
  console.log("test1");
  const token = localStorage.getItem("Token");
  if (token) {
    localStorage.removeItem("Token");
    history.push("/");
  } else console.log("error: there is no token but connected");
};

export { Logout };
