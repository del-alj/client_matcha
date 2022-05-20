import React, { useContext, useEffect, useState } from "react";

import { Layout } from "../../layouts/signinLayout";
import { Content, Box } from "../dashboard/style";
import { Board, MessageDiv, ChatBox } from "./style";

import { authentication } from "../../Components/contexts/usecontext";
import { currentConversation } from "../../Components/contexts/currentConversation";
import { conversationsContext } from "../../Components/contexts/conversationscontext";
import { getMessages } from "../../api/chats";
import { StikyUser } from "./tools/stikyUser";
import { ChatsSectionDiv } from "./tools/chatsSection";
import { TypingSectionDiv } from "./tools/typingSection";
import { ListMessagesDiv } from "./tools/listmessages";

import io from "socket.io-client";

export const Messages = (props) => {
  const [currentConversationDetails, setCurrentConversationDetails] =
    useContext(currentConversation);
  const [conversations, setConversations] = useContext(conversationsContext);

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

  socket?.connect();
  socket?.emit("connectRoo", {
    conversations,
  });
  useEffect(() => {
  console.log("chhal mn mara kan dkhol hna");
}, [setSocket]);

  if (socket && currentConversationDetails?.conversation_id) {
    socket.auth = {
      roomName: currentConversationDetails?.conversation_id,
    };
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
