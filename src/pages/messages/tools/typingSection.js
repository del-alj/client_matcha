import React, { useState, useEffect } from "react";
import { MessageInput, TypingSection, Button } from "../style";

export const TypingSectionDiv = (props) => {
  const { currentChat, socket } = props;

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket?.on("getMessage", (data) => {
      console.log("getMessage", data);
    });
  }, [socket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newMessage) {
      const message = {
        senderId: "user._id",
        receiverId: "receiverId",
        text: newMessage,
        conversationId: currentChat?._id,
      };
      console.log("this is msg", message, socket?.id);
      //send message
      socket?.emit("sendMessage", message);
      setNewMessage("");
    }
  };

  return (
    <TypingSection>
      <MessageInput
        placeholder="message ..."
        onChange={(e) => setNewMessage(e.target.value)}
      ></MessageInput>
      <Button onClick={handleSubmit}>Send</Button>
    </TypingSection>
  );
};
