import React, { useContext, useState, useEffect } from "react";
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
      console.log("this is msg", socket?.id, socket?.auth);
      //send message
      socket?.emit("message", message);
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
