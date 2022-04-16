import React, { useState, useContext } from "react";

import { Li, Ul, EditLi } from "./style";
import { tagsContext } from "../../Components/contexts/tagsContext";

const handelClick = (status, setStatus, props) => {
  setStatus(!status);

  // console.log(props);
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
          //this remove tag from the tags array
          tagsDetails.splice(tagIndex, 1);
          setTagsDetails([...tagsDetails]);
        }
      }}
      active={status}
    >
      <a href={props?.link}>{props?.titel}</a>
    </Li>
  );
};

const EditTag = (props) => {
  return (
    <EditLi>
      <div>
        <a href={"#"}>{props?.titel}</a>
      </div>
    </EditLi>
  );
};

const Tags = (props) => {
  const { tags } = props;
  return (
    <Ul>
      {tags?.map((tag, index) => {
        return (
          <Tag key={index} titel={tag?.titel || tag} id={tag?.tagId || 0} />
        );
      })}
    </Ul>
  );
};

const EditTags = (props) => {
  const { tags } = props;
  return (

    <Ul>
    {tags?.map((tag, index) => {
      return (
        <EditTag key={index} titel={tag?.titel || tag} id={tag?.tagId || 0} />
      );
    })}
  </Ul>
  );
};

export { Tags, EditTags };
