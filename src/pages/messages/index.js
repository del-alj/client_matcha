import React, { useContext, useEffect, useState } from "react";

import { Layout } from "../../layouts/signinLayout";
import { Content, Box } from "../dashboard/style";
import { Board, MessageDiv, ChatBox, MessageBoxButton } from "./style";

import { authentication } from "../../Components/contexts/usecontext";
import { currentConversation } from "../../Components/contexts/currentConversation";
import { conversationsContext } from "../../Components/contexts/conversationscontext";
import { getMessages } from "../../api/chats";
import { StikyUser } from "./tools/stikyUser";
import { ChatsSectionDiv } from "./tools/chatsSection";
import { TypingSectionDiv } from "./tools/typingSection";
import { ListMessagesDiv } from "./tools/listmessages";
import { updateConversationStatus } from "./tools/tools";
import {Burger} from "./tools/burger";

import io from "socket.io-client";

export const Messages = (props) => {
  const { auth } = useContext(authentication);
  const [currentConversationDetails, setCurrentConversationDetails] =
    useContext(currentConversation);
  const [conversations, setConversations] = useContext(conversationsContext);
  const urlMsg = `/chat/${currentConversationDetails?.conversation_id}`;

  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [notification, setNotification] = useState({});
  const [myNewmessage, setMyNewmessage] = useState(null);
  const [chatResponsive, setChatResponsive] = useState(true);

  useEffect(() => {
    if (currentConversationDetails?.conversation_id)
      getMessages(urlMsg, setMessages);
  }, [currentConversationDetails]);

  useEffect(() => {
    const env = `${process.env.REACT_APP__ENV}`;
    const newSocket = io(env, { autoConnect: false });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    auth?.socket?.connect();
    console.log("socket connect");
  }, [auth?.socket]);

  useEffect(() => {
    auth?.socket?.emit("connectRoo", {
      conversations,
    });
  }, [conversations]);

  if (auth?.socket && currentConversationDetails?.conversation_id) {
    auth.socket.auth = {
      roomName: currentConversationDetails?.conversation_id,
    };
  }

  useEffect(() => {
    auth?.socket?.on("message", (data) => {
      setNotification(data?.message);
    });
  }, [auth]);

  useEffect(() => {
    if (currentConversationDetails?.conversation_id != notification?.from)
      updateConversationStatus(
        conversations,
        setConversations,
        notification?.from,
        true
      );
  }, [notification]);

  return (
    <Layout login={true}>
      <Content>
        <Box>
          <ChatBox>
          <MessageBoxButton
            onClick={() => {
              setChatResponsive(!chatResponsive);
            }}
          >
            <Burger />
          </MessageBoxButton>
            <ListMessagesDiv
              userId={auth.userId}
              setChatResponsive={setChatResponsive}
              chatResponsive={chatResponsive}
            />
            <Board display={(chatResponsive?.toString() === "true") ? "false" : "true" }>
              <StikyUser userName={currentConversationDetails?.user_name} />
              <MessageDiv display={(chatResponsive?.toString() === "true") ? "false" : "true"}>
                {currentConversationDetails?.conversation_id ? (
                  <>
                    <ChatsSectionDiv
                      room={currentConversationDetails?.conversation_id}
                      messages={messages}
                      setMessages={setMessages}
                      myNewmessage={myNewmessage}
                      socket={socket}
                    />
                    <TypingSectionDiv
                      setMyNewmessage={setMyNewmessage}
                      socket={socket}
                    />
                  </>
                ) : (
                  <span className="noConversationText">
                    Open a conversation to start a chat.
                  </span>
                )}
              </MessageDiv>
            </Board>
          </ChatBox>
        </Box>
      </Content>
    </Layout>
  );
};
