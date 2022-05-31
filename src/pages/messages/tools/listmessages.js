import React, { useContext, useState, useEffect } from "react";

import { ListMessages } from "../style";

import { conversationsContext } from "../../../Components/contexts/conversationscontext";
import { Conversation } from "./conversation";
import { getListRooms } from "../../../api/chats";

export const ListMessagesDiv = (props) => {
  const urlListRooms = `/chat/listRooms/${props.userId}`;
  const [conversations, setConversations] = useContext(conversationsContext);

  useEffect(() => {
    getListRooms(urlListRooms, setConversations);
  }, []);

  console.log("this is rooms from list messages div", conversations);
  return (
    <ListMessages>
      {conversations.map((c, index) => (
        <Conversation key={`Conversation${index}`} currentUser={c} />
      ))}
    </ListMessages>
  );
};
