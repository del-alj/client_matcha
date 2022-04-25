import React, { useContext, useEffect, useState, useRef } from "react";

import { Layout } from "../../layouts/signinLayout";
import { Content, Box } from "../dashboard/style";
import {
  ListMessages,
  Board,
  MessageDiv,
  ChatBox,
  MessageInput,
  TypingSection,
  Button,
} from "./style";

import { UserContext } from "../../Components/contexts/usercontext";
import { authentication } from "../../Components/contexts/usecontext";
import { getUser } from "../editProfile/tools";
import { getMessages } from "../../api/chats";
import { StikyUser } from "./tools/stikyUser";
import { ChatsSectionDiv } from "./tools/chatsSection";
import { TypingSectionDiv } from "./tools/typingSection";
import { ListMessagesDiv } from "./tools/listmessages";

import io from "socket.io-client";

export const Messages = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const { auth } = useContext(authentication);
  const url = `/user/${auth.userId}`;
  const urlMsg = `/chat/${auth.userId}`;
  const [conversations, setConversations] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [messages, setMessages] = useState([
    "this id chat msg",
    "this id chat msg",
    "this id chat msg",
    "this id chat msg",
    "this id chat msg",
    "this id chat msg this id chat msg vthis id chat msg this id chat msg",
    "this id chat msg",
    "this id chat msg",
    "this id chat msg",
  ]);

  const [currentChat, setCurrentChat] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    getUser(url, setUserDetails);
    // getMessages(urlMsg, setMessages);
  }, []);

  useEffect(() => {
    const newSocket = io("localhost:7000");
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  if (socket) {
    socket?.on("connectToRoom", (data) => {
      console.log("connectToRoom", data?.roomName);
    });
  }

  return (
    <Layout login={true}>
      <Content>
        <Box>
          <ChatBox>
            <input type="text" />
            <ListMessagesDiv conversations={conversations} />
            <Board>
              <StikyUser userName={"dina"} />
              <MessageDiv>
                {/* {currentChat ? ( */}
                <ChatsSectionDiv messages={messages} socket={socket} />
                <TypingSectionDiv currentChat={currentChat} socket={socket} />
                {/* ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )} */}
              </MessageDiv>
            </Board>
          </ChatBox>
        </Box>
      </Content>
    </Layout>
  );
};
