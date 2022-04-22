import axios from "axios";
import { useEffect, useState } from "react";
import { getUser } from "../../editProfile/tools";
import { FriendImg, FriendName, ConversationDiv } from "../style";
export const Conversation = (props) => {
  const { conversation, currentUser } = props;
  // const [user, setUser] = useState(null);

  useEffect(() => {
    // const friendId = conversation.members.find((m) => m !== currentUser._id);
    // getUser();
  }, [currentUser, conversation]);
  return (
    <ConversationDiv>
      <FriendImg src={`url(${currentUser?.photoProfile})`} alt="" />
      <FriendName>{currentUser?.userName}</FriendName>
    </ConversationDiv>
  );
};
