import { useContext, useState } from "react";
import { FriendImg, FriendName, ConversationDiv } from "../style";
import { authentication } from "../../../Components/contexts/usecontext";
import { currentConversation } from "../../../Components/contexts/currentConversation";
import { conversationsContext } from "../../../Components/contexts/conversationscontext";
import { updateConversationStatus } from "./tools";
import { updateListRooms } from "../../../api/chats";
// import { updateRoomStatus } from "./tools";
export const Conversation = (props) => {
  const { currentUser, status, chatResponsive, setChatResponsive } = props;
  const { auth } = useContext(authentication);
  const [currentConversationDetails, setCurrentConversationDetails] =
  useContext(currentConversation);
  const [conversations, setConversations] = useContext(conversationsContext);
  const urlListRooms = `/chat/listRooms/${auth?.userId}/${currentUser?.conversation_id}`;
  return (
    <ConversationDiv
      onClick={(e) => {
        setCurrentConversationDetails(currentUser);
        updateConversationStatus(
          conversations,
          setConversations,
          currentUser?.conversation_id,
          false
        );
        updateListRooms(urlListRooms);
        setChatResponsive(!chatResponsive)

      }}
    >
      <FriendImg display={status.toString() || "false"} />
      <FriendName>{currentUser?.friend_name[0]}</FriendName>
    </ConversationDiv>
  );
};
