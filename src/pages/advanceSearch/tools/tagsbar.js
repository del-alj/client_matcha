import React, { useContext, useEffect, useState } from "react";
import { Div, SecDiv, H5 } from "../style";

import { tagsContext } from "../../../Components/contexts/tagsContext";
import { getAllTags } from "../../editProfile/tools";
import { Tags } from "../../../Components/tag";
const url = `/tag`;
export const TagsBar = (props) => {
  const [tagsDetails] = useContext(tagsContext);
  const [tags, setTags] = useState([]);
  const { data, setData } = props;
  useEffect(() => {
    getAllTags(url, setTags);
  }, []);
  useEffect(() => {
    const newData = { ...data };
    newData["tags"] = tagsDetails;
    setData(newData);
    console.log(newData);
  }, [tagsDetails]);
  return (
    <Div
      style={{
        height: "auto",
        alignItems: "normal",
      }}
    >
      <H5>{props.title}</H5>
      <SecDiv
        style={{
          maxHeight: "300px",
          overflowY: "scroll",
          paddingTop: "40px",
        }}
      >
        <Tags tags={tags} />
      </SecDiv>
    </Div>
  );
};
