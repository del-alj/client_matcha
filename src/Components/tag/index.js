import React from "react";

import { Li } from "./style";

const TagDiv = (props) => {
  return (
    <Li>
      <a href={props.link} className="tag">
        {props.titel}
      </a>
    </Li>
  );
};

export { TagDiv };
