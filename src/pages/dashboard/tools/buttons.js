import React from "react";

import { ButtonDiv } from "../style";

import { Button } from "./style";

const handelClick = (setNext, next) => {
  setNext(!next);
  console.log("next", next);
};

export const Buttons = (props) => {
  const { setNext, next } = props;
  console.log("button", next);

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
        }}
      >
        /3
      </Button>
    </ButtonDiv>
  );
};
