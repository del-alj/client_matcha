import React, { createContext, useState } from "react";

export const conversationsContext = createContext(null);

const ContextConversations = (props) => {
  const [conversations, setConversations]  = useState([]);

  return (
    <conversationsContext.Provider value={[conversations, setConversations]}>
      {props.children}
    </conversationsContext.Provider>
  );
};

export default ContextConversations;
