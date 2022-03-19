import React, { createContext, useState } from "react";

export const authentication = createContext();

const initailValue = {
  token: localStorage.getItem("Token") ?? null,
  refreshToken: localStorage.getItem("refreshToken") ?? null,
  userId: localStorage?.getItem("userId") ?? null,
};

const ContextProvider = (props) => {
  const [auth, setAuth] = useState(initailValue);
  return (
    <authentication.Provider value={{ auth, setAuth }}>
      {props.children}
    </authentication.Provider>
  );
};

export default ContextProvider;
