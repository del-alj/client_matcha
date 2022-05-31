import { useContext, useState } from "react";
import { FriendImg, FriendName, ConversationDiv } from "../style";
import { currentConversation } from "../../../Components/contexts/currentConversation";
import { conversationsContext } from "../../../Components/contexts/conversationscontext";
import {updateConversationStatus} from "./tools";
// import { updateRoomStatus } from "./tools";

export const Conversation = (props) => {
  const { currentUser } = props;
  const [currentConversationDetails, setCurrentConversationDetails] =
  useContext(currentConversation);
  const [conversations, setConversations] = useContext(conversationsContext);
   
  return (
    <ConversationDiv
      onClick={(e) => {
        setCurrentConversationDetails(currentUser);
        updateConversationStatus(conversations, setConversations, currentUser?.conversation_id, false);
      }}
    >
      <FriendImg display={currentUser?.status?.toString() || 'false'} />
      <FriendName>{currentUser?.friend_name[0]}</FriendName>
    </ConversationDiv>
  );
};
