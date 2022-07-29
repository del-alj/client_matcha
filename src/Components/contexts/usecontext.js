import React, { createContext, useState } from "react";
import io from "socket.io-client";

export const authentication = createContext();

const env = `${process.env.REACT_APP__ENV}`;
const initailValue = {
  token: localStorage.getItem("Token") ?? null,
  refreshToken: localStorage.getItem("refreshToken") ?? null,
  userId: localStorage?.getItem("userId") ?? null,
  socket: io(env, {
    extraHeaders: {
      Authorization: localStorage?.getItem("userId") ?? null,
    },
  }),
  reported: localStorage?.getItem("reported") === 'true',
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
