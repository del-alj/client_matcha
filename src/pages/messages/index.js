import React, { useContext, useEffect, useState, useRef } from "react";

import { Layout } from "../../layouts/signinLayout";
import { Content, Box } from "../dashboard/style";
import { Board, MessageDiv, ChatBox } from "./style";

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
    // { conversationId: 1, senderId: "2603", receiverId: 2613, text: "msg 1" },
    // { conversationId: 1, senderId: "2603", receiverId: 2613, text: "msg 2" },
    // { conversationId: 1, senderId: "2613", receiverId: 2603, text: "msg 3" },
    // { conversationId: 1, senderId: "2613", receiverId: 2603, text: "msg 4" },
  ]);

  const [currentChat, setCurrentChat] = useState(null);
  const [socket, setSocket] = useState(null);
  const [myNewmessage, setMyNewmessage] = useState(null);

  useEffect(() => {
    getUser(url, setUserDetails);
    getMessages(urlMsg, setMessages);
  }, []);

  useEffect(() => {
    const newSocket = io("localhost:7000");
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  useEffect(() => {
    console.log("update", messages);
  }, [messages]);
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
            <ListMessagesDiv conversations={conversations} />
            <Board>
              <StikyUser userName={"dina"} />
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
