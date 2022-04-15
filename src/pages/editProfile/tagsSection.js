import React, { useState, useEffect, useContext } from "react";

import { EditTags, Tags } from "../../Components/tag";
import { getAllTags, updateTags } from "./tools";
import { Button } from "../../Components/styles/Container.styles";
import { tagsContext } from "../../Components/contexts/tagsContext";
import { authentication } from "../../Components/contexts/usecontext";
import { UserContext } from "../../Components/contexts/usercontext";

const url = `/tag`;

const tagsIsDisabel = (tagsDetails) => {
  return tagsDetails.length >= 3 && tagsDetails.length <= 5 ? false : true;
};

export const TagsSection = () => {
  const [tags, setTags] = useState([]);
  const [disabel, setDisabel] = useState(false);
  const [userTags, setUserTags] = useState([""]);
  const [tagsDetails, setTagsDetails] = useContext(tagsContext);

  const { auth } = useContext(authentication);
  const urledit = `/tag/add/tags/${auth.userId}`;
  const [userDetails] = useContext(UserContext);

  useEffect(() => {
    getAllTags(url, setTags);
  }, []);
  useEffect(() => {
    setUserTags(userDetails?.userTags);
  }, [disabel, userDetails]);
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
            disabled={tagsIsDisabel(tagsDetails)}
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
