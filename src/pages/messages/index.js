import React, { useContext, useEffect, useState, useRef } from "react";

import { Layout } from "../../layouts/signinLayout";
import { Content, Box } from "../dashboard/style";
import { Board, MessageDiv, ChatBox } from "./style";

import { UserContext } from "../../Components/contexts/usercontext";
import { authentication } from "../../Components/contexts/usecontext";
import { currentConversation } from "../../Components/contexts/currentConversation";

import { getMessages } from "../../api/chats";
import { StikyUser } from "./tools/stikyUser";
import { ChatsSectionDiv } from "./tools/chatsSection";
import { TypingSectionDiv } from "./tools/typingSection";
import { ListMessagesDiv } from "./tools/listmessages";

import io from "socket.io-client";

export const Messages = (props) => {
  const [currentConversationDetails, setCurrentConversationDetails] =
    useContext(currentConversation);
  const { auth } = useContext(authentication);
  const urlMsg = `/chat/${currentConversationDetails?.conversation_id}`;

  const [messages, setMessages] = useState([]);

  const [socket, setSocket] = useState(null);
  const [myNewmessage, setMyNewmessage] = useState(null);

  useEffect(() => {
    if (currentConversationDetails?.conversation_id)
      getMessages(urlMsg, setMessages);
  }, [currentConversationDetails]);

  useEffect(() => {
    const newSocket = io("localhost:7000", { autoConnect: false });

    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  useEffect(() => {
    console.log("update", messages);
  }, [messages]);
  if (socket && currentConversationDetails?.conversation_id) {
    socket.auth = {
      roomName: currentConversationDetails?.conversation_id,
    };
    socket?.connect();

    socket?.on("connectToRoom", (roomName) => {
      console.log("connectToRoom", roomName);
    });
  }

  return (
    <Layout login={true}>
      <Content>
        <Box>
          <ChatBox>
            <ListMessagesDiv userId={auth.userId} />
            <Board>
              <StikyUser userName={currentConversationDetails?.user_name} />
              <MessageDiv>
                {/* {currentChat ? ( */}
                <ChatsSectionDiv
                  messages={messages}
                  setMessages={setMessages}
                  myNewmessage={myNewmessage}
                  socket={socket}
                />
                <TypingSectionDiv
                  setMyNewmessage={setMyNewmessage}
                  socket={socket}
                />
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
