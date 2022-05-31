import React, { useContext, useEffect } from "react";

import { ListMessages } from "../style";

import { conversationsContext } from "../../../Components/contexts/conversationscontext";
import { Conversation } from "./conversation";
import { getListRooms } from "../../../api/chats";

export const ListMessagesDiv = (props) => {
  const urlListRooms = `/chat/listRooms/${props.userId}`;
  const [conversations, setConversations] = useContext(conversationsContext);
  console.log("conversations", conversations, props.userId);
  useEffect(() => {
    getListRooms(urlListRooms, setConversations);
  }, []);

  const getStatus = (conversation) => {
    return (conversation?.is_sender == props?.userId ||
      conversation?.is_sender == 0) || conversation?.status == false
      ? false
      : true;
  };
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
