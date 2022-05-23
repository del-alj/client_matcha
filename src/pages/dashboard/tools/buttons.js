import React, { useContext } from "react";

import { ButtonDiv } from "../style";
import { UserContext } from "../../../Components/contexts/usercontext";

import { Button } from "./style";
import { likeThisUser } from "../../../api/likes";
const handelClick = (setNext, next) => {
  setNext(!next);
};

export const Buttons = (props) => {
  const { setNext, next, ids } = props;
  const [userDetails, setUserDetails] = useContext(UserContext);

  return (
    <ButtonDiv>
      <Button
        onClick={(e) => {
          handelClick(setNext, next);
        }}
      >
        x
      </Button>
      <Button
        onClick={(e) => {
          handelClick(setNext, next);
          likeThisUser(ids, setUserDetails);
        }}
      >
        /3
      </Button>
    </ButtonDiv>
  );
};
