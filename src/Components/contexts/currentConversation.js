import React, { createContext, useState } from "react";

export const currentConversation = createContext(null);

const ContextConversation = (props) => {
  const [currentConversationDetails, setCurrentConversationDetails]  = useState({});

  return (
    <currentConversation.Provider value={[currentConversationDetails, setCurrentConversationDetails]}>
      {props.children}
    </currentConversation.Provider>
  );
};

export default ContextConversation;
