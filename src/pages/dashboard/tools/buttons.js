import React from "react";

import { ButtonDiv } from "../style";

import { Button } from "./style";
import { likeThisUser } from "../../../api/likes";
const handelClick = (setNext, next) => {
  setNext(!next);
};

export const Buttons = (props) => {
  const { setNext, next, ids } = props;

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
          likeThisUser(ids);
        }}
      >
        /3
      </Button>
    </ButtonDiv>
  );
};
