import React, { useContext, useState, useEffect } from "react";

import { ListMessages } from "../style";

import { conversationsContext } from "../../../Components/contexts/conversationscontext";
import { Conversation } from "./conversation";
import { getListRooms } from "../../../api/chats";
import { updateSenderConversationStatus } from "./tools";

export const ListMessagesDiv = (props) => {
  const [status, setStatus] = useState(false);
  const urlListRooms = `/chat/listRooms/${props.userId}`;
  const [conversations, setConversations] = useContext(conversationsContext);
  console.log("conversations", conversations, props.userId);
  useEffect(() => {
    getListRooms(urlListRooms, setConversations);
    // updateSenderConversationStatus(
    //   conversations,
    //   setConversations,
    //   props?.userId,
    //   false
    //   );
  }, []);

const getStatus = (conversation) => {
 return (conversation?.is_sender == props?.userId || conversation?.is_sender == 0) ? false : true;

}

  // console.log(
  //   "this is rooms from list messages div",
  //   conversations,
  //   props?.userId
  // );

  return (
    <ListMessages>
      {conversations.map((c, index) => (
        <Conversation
          key={`Conversation${index}`}
          currentUser={c}
          status={getStatus(c)}
        />
      ))}
    </ListMessages>
  );
};
