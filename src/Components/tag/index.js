import React from "react";

import { Li, Ul, EditLi, DeleteButton } from "./style";

import del from "../../assets/icons/del.png";

const Tag = (props) => {
  return (
    <Li>
      <a href={props.link}>{props.titel}</a>
    </Li>
  );
};

const EditTag = (props) => {
  return (
    <EditLi>
      <div style={{ position: "relative" }}>
        <a
          href={props.link}
          style={{
            background: "none",
          }}
        >
          {props.titel}
        </a>
        <DeleteButton>
          <img
            src={del}
            alt=""
            style={{
              width: "0.6rem",
              height: "auto",
            }}
          />
        </DeleteButton>
      </div>
    </EditLi>
  );
};

const Tags = (props) => {
  const { tags } = props;
  return (
    <Ul>
      {tags.map((tag, index) => (
        <Tag key={index} link={tag.link} titel={tag.titel} />
      ))}
    </Ul>
  );
};

const EditTags = (props) => {
  const { tags } = props;
  return (
    <Ul>
      {tags.map((tag) => (
        <EditTag link={tag.link} titel={tag.titel} />
      ))}
    </Ul>
  );
};

export { Tags, EditTags };