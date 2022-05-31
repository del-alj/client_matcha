import { useContext, useState } from "react";
import { FriendImg, FriendName, ConversationDiv } from "../style";
import { currentConversation } from "../../../Components/contexts/currentConversation";
// import { updateRoomStatus } from "./tools";

export const Conversation = (props) => {
  const { currentUser, setConversations } = props;
  const [currentConversationDetails, setCurrentConversationDetails] =
    useContext(currentConversation);
  return (
    <ConversationDiv
      onClick={(e) => {
        setCurrentConversationDetails(currentUser);
      //   if (currentUser?.status)
      //     updateRoomStatus(currentConversationDetails?.conversation_id, setConversations);
      }}
    >
      <FriendImg display={currentUser?.status?.toString() || 'false'} />
      <FriendName>{currentUser?.friend_name[0]}</FriendName>
    </ConversationDiv>
  );
};
