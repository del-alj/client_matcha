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
import { StikyUser } from "./tools/stikyUser";
import { ChatsSectionDiv } from "./tools/chatsSection";
import { TypingSectionDiv } from "./tools/typingSection";
import { ListMessagesDiv } from "./tools/listmessages";

export const Messages = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const { auth } = useContext(authentication);
  const url = `/user/${auth.userId}`;
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

  useEffect(() => {
    getUser(url, setUserDetails);
  }, []);

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
                <ChatsSectionDiv messages={messages}/>
                <TypingSectionDiv currentChat={currentChat} />
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
