import React, { useContext, useEffect, useState } from "react";
import { Div, SecDiv, H5 } from "../style";
import { useHistory } from "react-router-dom";
import { authentication } from "../../../Components/contexts/usecontext";

export const AgeBar = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);

  return (
    <Div>
      <H5>{props.title}</H5>
      <SecDiv></SecDiv>
    </Div>
  );
};
