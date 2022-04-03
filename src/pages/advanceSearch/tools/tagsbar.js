import React, { useContext, useEffect, useState } from "react";
import { Div, SecDiv, H5 } from "../style";
import { useHistory } from "react-router-dom";
import { authentication } from "../../../Components/contexts/usecontext";

import { tagsContext } from "../../../Components/contexts/tagsContext";
import { getAllTags } from "../../editProfile/tools";
import { EditTags, Tags } from "../../../Components/tag";
const url = `/tag`;
export const TagsBar = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllTags(url, setTags);
  }, []);
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
