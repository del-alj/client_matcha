import React, { useContext, useEffect, useState, useRef } from "react";

import { UserContext } from "../../../Components/contexts/usercontext";
import { ChatsSection } from "../style";
import { authentication } from "../../../Components/contexts/usecontext";
import { Message } from "./message";
import { HeartSymbol } from "./heartSymbol";
import { currentConversation } from "../../../Components/contexts/currentConversation";

export const ChatsSectionDiv = (props) => {
  const { myNewmessage, messages, setMessages, socket } = props;
  const { auth } = useContext(authentication);
  const scroll = useRef();
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [firstTime, setFirstTime] = useState(true);
  const [currentConversationDetails] = useContext(currentConversation);

  const messageListener = (message) => {
    if (message) {
      setMessages((messages) => {
        const newMessages = [...messages];
        newMessages.push(message);
        return newMessages;
      });
    }
  };

  // for scroll chat
  useEffect(() => {
    // if (firstTime) {
    scroll.current.scrollTop = scroll.current.scrollHeight;
    //   setFirstTime(false);
    // } else if (
    //   scroll.current.scrollTop + scroll.current.clientHeight ===
    //   scroll.current.scrollHeight
    // ) {
    //   scroll.current.scrollTop = scroll.current.scrollHeight;
    // }
  }, [messages]);

  useEffect(() => {
    socket?.on("message", (data) => {

        messageListener(data);
      
    });
  }, [socket]);

  useEffect(() => {
    
    messageListener(myNewmessage);
  }, [myNewmessage]);
  return (
    <ChatsSection ref={scroll}>
      <HeartSymbol />
      {messages?.map((m, index) => (
        <Message
          key={`Message${index}`}
          photoProfile={userDetails?.photoProfile}
          message={m?.message_text}
          own={m?.sender_id == auth?.userId}
        />
      ))}
    </ChatsSection>
  );
};
