import React, { useState, useEffect } from "react";

import { AddPicture } from "./addPicture";
import { AddFirstPicture } from "./addFirstPicture";
import { Flex } from "../../Components/styles/Container.styles";
import { PhotoProfile } from "../userProfile/style";
import { TagsSection } from "./tagsSection";
import { Blurry } from "./style";
import { Loading } from "../../Components/loading";

export const FirstSection = (props) => {
  const { photoProfile } = props;
  const [display, setDisplay] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setDisplay(true);
  };
  useEffect(() => {
    setNewUser(photoProfile ? false : true)
  }, [photoProfile]);

  useEffect(() => {
    if(newUser)
    setIsLoading(true);
  }, [newUser]);
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
          <TagsSection />
        </Flex>
      </Flex>
      {display || (newUser && !isLoading) ? <Blurry /> : <></>}
      {isLoading ?? <Loading/>}
      {display && <AddPicture display={display} setDisplay={setDisplay} />}
      {/* {newUser && !isLoading && <AddFirstPicture setDisplay={setNewUser} />} */}
    </Flex>
  );
};
