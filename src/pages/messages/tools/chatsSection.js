import React, { useContext, useEffect, useState, useRef } from "react";

import { UserContext } from "../../../Components/contexts/usercontext";
import { ChatsSection } from "../style";

import { Message } from "./message";
import { HeartSymbol } from "./heartSymbol";

export const ChatsSectionDiv = (props) => {
  const { messages, socket } = props;
  const scroll = useRef();
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [firstTime, setFirstTime] = useState(true);
  const [messageso, setMessages] = useState({});

  // for scroll chat
  useEffect(() => {
    if (firstTime) {
      scroll.current.scrollTop = scroll.current.scrollHeight;
      setFirstTime(false);
    } else if (
      scroll.current.scrollTop + scroll.current.clientHeight ===
      scroll.current.scrollHeight
    ) {
      scroll.current.scrollTop = scroll.current.scrollHeight;
    }
  }, []);


  useEffect(() => {
    const messageListener = (message) => {
      console.log("test effect")
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
        return newMessages;
      });
    };
  
    socket?.on('message', messageListener);
    socket?.emit('getMessages');

    // return () => {
    //   socket?.off('message', messageListener);
    // };
  }, [socket]);

  return (
    <ChatsSection ref={scroll}>
      <HeartSymbol />
      {messages.map((m, index) => (
        <Message
        key={`Message${index}`}
          photoProfile={userDetails?.photoProfile}
          message={m}
          own={m?.sender === "user._id"}
        />
      ))}
    </ChatsSection>
  );
};
