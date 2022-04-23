import React, { useContext, useState } from "react";

import { ListMessages } from "../style";

import { UserContext } from "../../../Components/contexts/usercontext";
import { Conversation } from "./conversation";

export const ListMessagesDiv = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const { conversations } = props;

  return (
    <ListMessages>
      {/* {conversations.map((c) => (
      <div onClick={() => setCurrentChat(c)}> */}
      {conversations.map((c) => (
        <Conversation conversation={"c"} currentUser={userDetails} />
      ))}
      {/* </div>
    ))} */}
    </ListMessages>
  );
};
