import React, { useContext, useState, useEffect, useCallback } from "react";
import { MessageInput, TypingSection, Button } from "../style";
import { currentConversation } from "../../../Components/contexts/currentConversation";

import { authentication } from "../../../Components/contexts/usecontext";
export const TypingSectionDiv = (props) => {
  const { setMyNewmessage, currentChat, socket } = props;
  const [currentConversationDetails, setCurrentConversationDetails] =
    useContext(currentConversation);
  const [newMessage, setNewMessage] = useState("");
  const { auth } = useContext(authentication);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //xni had l3abat
    if (newMessage) {
      const message = {
        sender_id: auth?.userId,
        receiver_id: auth?.userId === "2603" ? 2613 : 2603,
        message_text: newMessage,
        conversation_id: socket?.auth?.roomName,
      };
      //send message
      socket?.emit("private message", {
        content: message,
        to: message?.conversation_id,
      });
      setMyNewmessage(message);
      setNewMessage("");
    }
  };
  return (
    <>
      {currentConversationDetails?.case === "0" && (
        <TypingSection>
          <MessageInput
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
                e.target.value = "";
              }
            }}
            placeholder="message ..."
            onChange={(e) => setNewMessage(e.target.value)}
          ></MessageInput>
          <Button onClick={handleSubmit}>Send</Button>
        </TypingSection>
      )}
    </>
  );
};
