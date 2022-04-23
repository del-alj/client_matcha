import React, { useState } from "react";
import { MessageInput, TypingSection, Button } from "../style";

export const TypingSectionDiv = (props) => {
  const {currentChat} = props;

  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: "user._id",
      text: newMessage,
      conversationId: currentChat._id,
    };
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
