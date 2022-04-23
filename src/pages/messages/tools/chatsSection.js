import React, { useContext, useEffect, useState, useRef } from "react";

import { UserContext } from "../../../Components/contexts/usercontext";
import { ChatsSection } from "../style";

import { Message } from "./message";
import { HeartSymbol } from "./heartSymbol";

export const ChatsSectionDiv = (props) => {
  const { messages } = props;
  const scroll = useRef();
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [firstTime, setFirstTime] = useState(true);

  // for scroll chat
  useEffect(() => {
    if (firstTime) {
      scroll.current.scrollTop = scroll.current.scrollHeight;
      setFirstTime(false);
    } else if (
      scroll.current.scrollTop + scroll.current.clientHeight ===
      scroll.current.scrollHeight
    ) {
      scroll.current.scrollTop = scroll.current.scrollHeight;
    }
  }, []);

  return (
    <ChatsSection ref={scroll}>
      <HeartSymbol />
      {messages.map((m) => (
        <Message
          photoProfile={userDetails?.photoProfile}
          message={m}
          own={m?.sender === "user._id"}
        />
      ))}
    </ChatsSection>
  );
};
