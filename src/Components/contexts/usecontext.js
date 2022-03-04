import React, { createContext, useState } from "react";

export const autontication = createContext();

const initailValue = {
  token: localStorage?.getItem("Token") ?? null,
  userId: localStorage?.getItem("userId") ?? null,
};

const ContextProvider = (props) => {
  const [auth, setAuth] = useState(initailValue);
  return (
    <autontication.Provider value={{ auth, setAuth }}>
      {props.children}
    </autontication.Provider>
  );
};

export default ContextProvider;
