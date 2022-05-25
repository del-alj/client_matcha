import React, { useContext, useState, useEffect } from "react";

import { ListMessages } from "../style";

import { UserContext } from "../../../Components/contexts/usercontext";
import { conversationsContext } from "../../../Components/contexts/conversationscontext";
import { Conversation } from "./conversation";
import { getListRooms } from "../../../api/chats";

export const ListMessagesDiv = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const urlListRooms = `/chat/listRooms/${props.userId}`;
  const [conversations, setConversations] = useContext(conversationsContext);

  useEffect(() => {
    getListRooms(urlListRooms, setConversations);
  }, []);

  return (
    <ListMessages>
      {conversations.map((c, index) => (
        <Conversation
          key={`Conversation${index}`}
          currentUser={c}
        />
      ))}
    </ListMessages>
  );
};
