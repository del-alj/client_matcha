import React, { useContext, useEffect, useState } from "react";

import { Layout } from "../../layouts/signinLayout";
import { Content, Box } from "../dashboard/style";
import {
  ListMessages,
  Board,
  Heart,
  Circle,
  Div,
  MessageDiv,
  ChatBox,
  MessageInput,
  TypingSection,
  Button,
  ChatsSection,
} from "./style";

import { UserContext } from "../../Components/contexts/usercontext";
import { authentication } from "../../Components/contexts/usecontext";
import { getUser } from "../editProfile/tools";
import { Conversation } from "./tools/conversation";
import heart from "../../assets/icons/heart.png";
import { StikyUser } from "./tools/stikyUser";
import {Message} from './tools/message';
// import { Conversation } from "./tools/conversation";
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
  const [currentChat, setCurrentChat] = useState(null);
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
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    getUser(url, setUserDetails);
  }, []);
  console.log("test88");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: "user._id",
      text: newMessage,
      conversationId: currentChat._id,
    };
  };
  return (
    <Layout login={true}>
      <Content>
        <Box>
          <ChatBox>
            <ListMessages>
              {/* {conversations.map((c) => (
                    <div onClick={() => setCurrentChat(c)}> */}
              {conversations.map((c) => (
                <Conversation conversation={"c"} currentUser={userDetails} />
              ))}
              {/* </div>
                  ))} */}
            </ListMessages>
            <Board >
              <StikyUser userName={"dina"} />
              <MessageDiv>
                {/* {currentChat ? ( */}
          
                  <ChatsSection>
                  <Div>
                    <Heart src={heart} />
                    <Circle />
                    <Circle />
                    <Circle />
                  </Div>
                    {messages.map((m) => (
                        <Message photoProfile={userDetails?.photoProfile} message={m} own={m?.sender === "user._id"} />
                    ))}
                  </ChatsSection>
                  <TypingSection>
                    <MessageInput
                      placeholder="message ..."
                      onChange={(e) => setNewMessage(e.target.value)}
                    ></MessageInput>
                    <Button onClick={handleSubmit}>
                      Send
                    </Button>
                  </TypingSection>
               
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
