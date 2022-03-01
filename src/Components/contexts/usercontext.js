import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

const ContextUser = (props) => {
  const [userDetails, setUserDetails] = useState({});

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ContextUser;
