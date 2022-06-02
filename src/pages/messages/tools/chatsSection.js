import React, { useContext, useEffect, useRef, useCallback } from "react";

import { ChatsSection } from "../style";

import { UserContext } from "../../../Components/contexts/usercontext";
import { authentication } from "../../../Components/contexts/usecontext";
import { currentConversation } from "../../../Components/contexts/currentConversation";

import { Message } from "./message";
import { HeartSymbol } from "./heartSymbol";

export const ChatsSectionDiv = (props) => {
  const scroll = useRef();
  const { myNewmessage, messages, setMessages, socket, room } = props;
  const { auth } = useContext(authentication);
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [currentConversationDetails, setCurrentConversationDetails] =
    useContext(currentConversation);

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
    messageListener(message);
  }, []);

  useEffect(() => {
    socket?.on("private message", (message) => {
      if (
        currentConversationDetails?.conversation_id === message?.message?.to
        ) {
          privateMessage(message?.message?.content);
        }
      });
    }, [socket, privateMessage, currentConversationDetails]);
    
    useEffect(() => {
      messageListener(myNewmessage);
    }, [myNewmessage]);

  return (
    <ChatsSection ref={scroll}>
      <HeartSymbol />
      {messages?.map((m, index) => (
        <div  key={`div${index}`}>
          {m?.conversation_id === currentConversationDetails?.conversation_id && (
            <Message
              key={`Message${index}`}
              photoProfile={userDetails?.photoProfile}
              message={m?.message_text}
              own={m?.sender_id == auth?.userId}
              conversation_id={currentConversationDetails?.conversation_id}
            />
          )}
        </div>
      ))}
    </ChatsSection>
  );
};
