import React, { useState, useEffect, useContext } from "react";

import { EditTags, Tags } from "../../Components/tag";
import { getUserTags, getAllTags, updateTags } from "./tools";
import { Button } from "../../Components/styles/Container.styles";
import { tagsContext } from "../../Components/contexts/tagsContext";
import { authentication } from "../../Components/contexts/usecontext";

const url = `/tag`;
export const TagsSection = () => {
  const [tags, setTags] = useState([]);
  const [disabel, setDisabel] = useState(false);
  const [userTags, setUserTags] = useState([""]);
  const [tagsDetails, setTagsDetails] = useContext(tagsContext);

  const { auth } = useContext(authentication);
  const urledit = `/tag/add/tags/${auth.userId}`;

  useEffect(() => {
    getAllTags(url, setTags);
  }, []);
  useEffect(() => {
    getUserTags(`${url}/${auth.userId}`, setUserTags);
  }, [disabel]);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {disabel ? (
        <>
          <Tags tags={tags} />
          <Button
            disabled={tagsDetails.length >= 3 ? false : true}
            onClick={async () => {
              await updateTags(urledit, tagsDetails);
              setTagsDetails("");
              setDisabel(false);
            }}
          >
            Edit
          </Button>
        </>
      ) : (
        <>
          <EditTags tags={userTags} />
          <Button
            style={{ width: "15rem", margin: "auto", fontSize: "14px" }}
            onClick={() => {
              setDisabel(true);
            }}
          >
            add/change Tags
          </Button>
        </>
      )}
    </div>
  );
};
