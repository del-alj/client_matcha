import React, { useContext, useState, useEffect } from "react";
import { MessageInput, TypingSection, Button } from "../style";
import { authentication } from "../../../Components/contexts/usecontext";
export const TypingSectionDiv = (props) => {
  const { setMyNewmessage, currentChat, socket } = props;

  const [newMessage, setNewMessage] = useState("");
  const { auth } = useContext(authentication);
  // useEffect(() => {
  //   socket?.on("getMessage", (data) => {
  //     console.log("getMessage", data);
  //   });
  // }, [socket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newMessage) {
      const message = {
        sender_id: auth?.userId,
        receiver_id: (auth?.userId === '2603') ? 2613 : 2603,
        message_text: newMessage,
        conversation_id: 1,
      };
      console.log("this is msg", message, socket?.id);
      //send message
      socket?.emit("message", message);
      setMyNewmessage(message);
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
