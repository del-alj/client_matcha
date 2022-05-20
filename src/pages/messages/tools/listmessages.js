import React, { useContext, useState, useEffect } from "react";

import { ListMessages } from "../style";

import { UserContext } from "../../../Components/contexts/usercontext";

import { Conversation } from "./conversation";
import { getListRooms } from "../../../api/chats";

export const ListMessagesDiv = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const urlListRooms = `/chat/listRooms/${props.userId}`;
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getListRooms(urlListRooms, setConversations);
  }, []);
  return (
    <ListMessages>
      {conversations.map((c, index) => (
        <Conversation
          key={`Conversation${index}`}
          conversation={"c"}
          currentUser={c}
        />
      ))}
    </ListMessages>
  );
};
