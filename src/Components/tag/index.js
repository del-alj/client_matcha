import React from "react";

import { Li, Ul } from "./style";

const Tag = (props) => {
  return (
    <Li>
      <a href={props.link} className="tag">
        {props.titel}
      </a>
    </Li>
  );
};

const Tags = (props) => {
  const { tags } = props;
  return (
    <Ul>
      {tags.map((tag) => (
        <Tag link={tag.link} titel={tag.titel} />
      ))}
    </Ul>
  );
};

export { Tags };
