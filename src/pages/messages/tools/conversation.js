import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { getUser } from "../../editProfile/tools";
import { FriendImg, FriendName, ConversationDiv } from "../style";
import { currentConversation } from "../../../Components/contexts/currentConversation";
export const Conversation = (props) => {
  const { conversation, currentUser } = props;
  const [currentConversationDetails, setCurrentConversationDetails] = useContext(currentConversation);
  // const [user, setUser] = useState(null);
  useEffect(() => {
    // const friendId = conversation.members.find((m) => m !== currentUser._id);
    // getUser();
  }, [currentUser, conversation]);
  console.log(currentUser);
  return (
    <ConversationDiv onClick={(e)=> {
      console.log("dsdsdsd", currentUser)
      setCurrentConversationDetails(currentUser);
    }}>
      {/* <FriendImg src={`url(${currentUser?.photoProfile})`} alt="" /> */}
      <FriendName>{currentUser?.user_name}</FriendName>
    </ConversationDiv>
  );
};
