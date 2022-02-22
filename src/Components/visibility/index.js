import React from "react";

import { Status, Titel, VisibilityDiv } from "./style.js";

const Visibility = (props) => {
  return (
    <VisibilityDiv>
      <Status state={props.status} />
      <Titel>{props.status}</Titel>
    </VisibilityDiv>
  );
};

export { Visibility };
