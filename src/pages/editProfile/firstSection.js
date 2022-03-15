import React, { useState, useEffect } from "react";

import { EditTags } from "../../Components/tag";
import { AddPicture } from "./addPicture";
import { Flex } from "../../Components/styles/Container.styles";
import { PhotoProfile } from "../userProfile/style";
import { getTags } from "./tools";

const url = `/tag`;

export const FirstSection = (props) => {
  const { photoProfile } = props;
  const [tags, setTags] = useState([]);
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(true);
  };

  useEffect(() => {
    getTags(url, setTags);
  }, []);

  console.log(tags);
  return (
    <Flex justifyContent="center" style={{ padding: "0 2rem" }}>
      <Flex direction="row">
        <Flex direction="column">
          <div>
            <PhotoProfile
              src={`url(${photoProfile})`}
              alt="Photo Profile"
            ></PhotoProfile>
          </div>
          <h2
            href="#"
            style={{
              fontSize: "1.1rem",
              color: "#535353",
              textDecoration: "none",
            }}
            onClick={handleClick}
          >
            Change Profile Photo
          </h2>
          <EditTags tags={tags} />
        </Flex>
      </Flex>
      {display && <AddPicture display={display} setDisplay={setDisplay} />}
    </Flex>
  );
};
