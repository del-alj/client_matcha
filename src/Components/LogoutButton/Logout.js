const Logout = () => {
  const token = localStorage.getItem("Token");
  if (token) {
    localStorage.removeItem("Token");
  } else console.log("error: there is no token but connected");
};

export { Logout };
