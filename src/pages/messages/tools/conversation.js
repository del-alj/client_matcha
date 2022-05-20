import { useContext, useState } from "react";
import { FriendImg, FriendName, ConversationDiv } from "../style";
import { currentConversation } from "../../../Components/contexts/currentConversation";

export const Conversation = (props) => {
  const { conversation, currentUser } = props;
  const [currentConversationDetails, setCurrentConversationDetails] =
    useContext(currentConversation);
  return (
    <ConversationDiv
      onClick={(e) => {
        setCurrentConversationDetails(currentUser);
      }}
    >
      {/* <FriendImg src={`url(${currentUser?.photoProfile})`} alt="" /> */}
      <FriendName>{currentUser?.friend_name[0]}</FriendName>
    </ConversationDiv>
  );
};
