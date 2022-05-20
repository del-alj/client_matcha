import React, {
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";

import { UserContext } from "../../../Components/contexts/usercontext";
import { ChatsSection } from "../style";
import { authentication } from "../../../Components/contexts/usecontext";
import { Message } from "./message";
import { HeartSymbol } from "./heartSymbol";

export const ChatsSectionDiv = (props) => {
  const { myNewmessage, messages, setMessages, socket, room } = props;
  const { auth } = useContext(authentication);
  const scroll = useRef();
  const [userDetails, setUserDetails] = useContext(UserContext);

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
    scroll.current.scrollTop = scroll.current.scrollHeight;
  }, [messages]);

  const privateMessage = useCallback((message) => {
    console.log("this is call back", message);
    messageListener(message);
  }, []);

  useEffect(() => {
    // console.log("this is msg effect", socket?.id, socket?.auth);
    socket?.on("private message", (message) => {
      console.log("this info", message, room);
      if (room === message?.message?.to)
        privateMessage(message?.message?.content);
    });
  }, [socket, myNewmessage, privateMessage]);

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
