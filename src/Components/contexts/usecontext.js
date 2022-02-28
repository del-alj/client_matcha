import React, { createContext, useState, useMemo } from "react";

export const autontication = createContext(localStorage.getItem("Token"));
// export const token = createContext(localStorage.getItem("Token"));

// const accessToken = token.accessToken;

const ContextProvider = (props) => {
  return (
    <autontication.Provider value={autontication}>
      {props.children}
    </autontication.Provider>
  );
};

export default ContextProvider;
