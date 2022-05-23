import React, { useState, useEffect, useContext } from "react";

import { Tags } from "../../Components/tag";
import { Visibility } from "../../Components/visibility";
import { Flex } from "../../Components/styles/Container.styles";
import { PhotoProfile } from "./style";
import { DefinitionSection } from "./tools/definition";
import { MiniSection } from "./tools/miniSection";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Components/contexts/usercontext";

export const FirstSection = (props) => {
  const [userTags, setUserTags] = useState([""]);
  const [visibil, setVisibil] = useState(false);
  const [userDetails] = useContext(UserContext);

  let { id } = useParams();
  useEffect(() => {
    setUserTags(userDetails?.userTags);
    if (!id) setVisibil(true);
  }, [userDetails]);
  return (
    <Flex direction="row" justifyContent="center">
      <Flex direction="row">
        <Flex direction="column">
          <div>
            <PhotoProfile
              src={`url(${userDetails?.photoProfile})`}
              alt="Photo Profile"
            ></PhotoProfile>
            {id && <Visibility />}
          </div>
          <Tags tags={userTags} />
        </Flex>
        <DefinitionSection visibility={visibil} />
      </Flex>
      <MiniSection />
    </Flex>
  );
};
