import React, { createContext } from "react";

export const autontication = createContext(
  localStorage?.getItem("Token") ?? null
);
// export const autontication1 = createContext(localStorage.getItem("Token"));

const ContextProvider = (props) => {
  return (
    <autontication.Provider value={autontication}>
      {props.children}
    </autontication.Provider>
  );
};

export default ContextProvider;
