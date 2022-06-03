import React, { useContext } from "react";

import { Button } from "./style";
import { ButtonDiv } from "../style";
import { likeThisUserDashboard } from "../../../api/likes";
import { UserContext } from "../../../Components/contexts/usercontext";
import { authentication } from "../../../Components/contexts/usecontext";
import close from "../../../assets/icons/close.png";
import heart from "../../../assets/icons/heart.png";
const handelClick = (setNext, next) => {
  setNext(!next);
};

export const Buttons = (props) => {
  const { setNext, next, ids } = props;
  const { auth } = useContext(authentication);
  const [userDetails, setUserDetails] = useContext(UserContext);

  const content = {
    userName: "someone",
    type: "like",
    status: true,
    from: ids?.user_id,
    to: ids?.suggestion_user_id || null,
  };

  return (
    <ButtonDiv>
      <Button
        onClick={(e) => {
          handelClick(setNext, next);
        }}
      >
        <img  style={{width: "15px", height: "15px", filter: "invert(100%)"}} src={close}/>
      </Button>
      <Button
        onClick={(e) => {
          auth?.socket?.emit("notification", {
            content,
            to: ids?.suggestion_user_id,
          });
          handelClick(setNext, next);
          likeThisUserDashboard(ids, setUserDetails);
        }}
      >
        <img  style={{width: "20px", height: "20px", filter: "invert(100%)"}} src={heart}/>
      </Button>
    </ButtonDiv>
  );
};
//
