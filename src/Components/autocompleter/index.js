import React, { useEffect, useState, useContext } from "react";
import { getAllTags, updateTags } from "../../pages/editProfile/tools";
import { Autocomplete, Input, Button } from "./style.js";
import { autoComplete } from "./tools";
import { EditTags } from "../tag/index";
import { authentication } from "../../Components/contexts/usecontext";
import { tagsContext } from "../../Components/contexts/tagsContext";

const AutocompleterTags = (props) => {
  const [tags, setTags] = useState([]);
  const [disabel, setDisabel] = useState(false);
  const { auth } = useContext(authentication);

  const [tagsDetails, setTagsDetails] = useContext(tagsContext);
  const url = `/tag`;
  const urledit = `/tag/add/tags/${auth.userId}`;
  const tagsIsDisabel = (tagsDetails) => {
    return tagsDetails.length >= 3 && tagsDetails.length <= 5 ? false : true;
  };

  const [currentFocus, setcurrentFocus] = useState();
  const [currentList, setcurrentList] = useState([]);
  const [event, setEvent] = useState(false);
  useEffect(() => {
    getAllTags(url, setTags);
  }, []);

  useEffect(() => {
    if (event) {
      autoComplete(event, tags, currentFocus, setcurrentFocus);
    }
  }, [event]);

  useEffect(() => {
    if (event) {
      console.log(currentFocus);
      if (currentFocus) {
        const temp = currentList?.includes(currentFocus);
        if (!temp) {
          setcurrentList([...currentList, currentFocus]);
        }
      }
      const isTags = currentList?.map((elemt) => {return elemt?.tagId})
      setTagsDetails(isTags);
    }
  }, [event, currentFocus]);
  return (
    <div>
      <Autocomplete>
        <Input
          disabled={!(currentList?.length < 5)}
          id="result"
          type="text"
          name="tags"
          placeholder="Tags"
          onChange={(e) => {
            if (e?.target?.value) setEvent(e);
          }}
        />
      </Autocomplete>
      <EditTags tags={currentList} />
      {/* <Button disabled={tagsIsDisabel(currentList)} onClick={async () => {
              await updateTags(urledit, tagsDetails);
              setTagsDetails("");
              setDisabel(false);
            }}>
       Edit
      </Button> */}
    </div>
  );
};
export { AutocompleterTags };
