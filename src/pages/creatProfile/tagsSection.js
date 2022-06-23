import React, { useState, useEffect, useContext } from "react";

import { EditTags, Tags } from "../../Components/tag";
import { getAllTags, updateTags } from "../editProfile/tools";
import { Button } from "../../Components/styles/Container.styles";
import { tagsContext } from "../../Components/contexts/tagsContext";
import { authentication } from "../../Components/contexts/usecontext";
import { UserContext } from "../../Components/contexts/usercontext";
import {AutocompleterTags} from "../../Components/autocompleter/index";

const url = `/tag`;

const tagsIsDisabel = (tagsDetails) => {
  return tagsDetails?.length >= 3 && tagsDetails?.length <= 5 ? false : true;
};

export const TagsSection = (props) => {
  const {setNext} = props;
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
        <>
          <h1>add your tags</h1>
          <AutocompleterTags/>
          <Button
            disabled={tagsIsDisabel(tagsDetails)}
            onClick={async () => {
              setDisabel(false);
              // await updateTags(urledit, tagsDetails);
              // setTagsDetails("");
              setNext(3);
            }}
          >
            Edit
          </Button>

        </>
    </div>
  );
};
