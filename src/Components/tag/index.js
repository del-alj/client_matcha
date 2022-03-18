import React, { useState, useContext } from "react";

import { Li, Ul, EditLi } from "./style";
import { tagsContext } from "../../Components/contexts/tagsContext";

const handelClick = (status, setStatus, props) => {
  setStatus(!status);

  console.log(props);
};

const Tag = (props) => {
  const [status, setStatus] = useState(false);
  const [tagsDetails, setTagsDetails] = useContext(tagsContext);

  return (
    <Li
      onClick={() => {
        handelClick(status, setStatus, props);
        if (!status) setTagsDetails([...tagsDetails, props.id]);
        else {
          const tagIndex = tagsDetails.indexOf(props.id);
          //remove tag from the tags array
          console.log("=> ", tagIndex);
          tagsDetails.splice(tagIndex, 1);
          setTagsDetails([...tagsDetails]);
        }
      }}
      active={status}
    >
      <a href={props.link}>{props.titel}</a>
    </Li>
  );
};

const EditTag = (props) => {
  return (
    <EditLi>
      {/* <div style={{ position: "relative" }}> */}
      <div>
        <a
          href={props.link}
          style={{
            background: "none",
          }}
        >
          {props.titel}
        </a>
      </div>
    </EditLi>
  );
};

const Tags = (props) => {
  const { tags } = props;
  return (
    <Ul>
      {tags.map((tag, index) => {
        return (
          <Tag key={index} link={tag.link} titel={tag.titel} id={tag.tagId} />
        );
      })}
    </Ul>
  );
};

const EditTags = (props) => {
  const { tags } = props;
  return (
    <Ul>
      {tags.map((tag, index) => (
        <EditTag key={index} link={tag.link} titel={tag.titel} />
      ))}
    </Ul>
  );
};

export { Tags, EditTags };
