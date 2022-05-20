import React, { useContext, useState, useEffect, useCallback } from "react";
import { MessageInput, TypingSection, Button } from "../style";
import { authentication } from "../../../Components/contexts/usecontext";
export const TypingSectionDiv = (props) => {
  const { setMyNewmessage, currentChat, socket } = props;

  const [newMessage, setNewMessage] = useState("");
  const { auth } = useContext(authentication);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      console.log("im here handel send msg 1");
      setMyNewmessage(message);
      setNewMessage("");
    }
  };

  return (
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
  );
};
