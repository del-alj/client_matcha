import React, { useState, useEffect, useContext } from "react";

import { Tags } from "../../Components/tag";
import { Visibility } from "../../Components/visibility";
import { Flex } from "../../Components/styles/Container.styles";
import { PhotoProfile } from "./style";
import { DefinitionSection } from "./tools/definition";
import { MiniSection } from "./tools/miniSection";
import { useParams } from "react-router-dom";
import { getUserTags } from "../editProfile/tools";
import { authentication } from "../../Components/contexts/usecontext";

export const FirstSection = (props) => {
  const { status, ratings, photoProfile } = props;
  const { auth } = useContext(authentication);
  const [userTags, setUserTags] = useState([""]);
  const [visibil, setVisibil] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    getUserTags(`/tag/${id ? id : auth.userId}`, setUserTags);
    if (!id)
      setVisibil(true);
  }, []);
  return (
    <Flex direction="row" justifyContent="center">
      <Flex direction="row">
        <Flex direction="column">
          <div>
            <PhotoProfile
              src={`url(${photoProfile})`}
              alt="Photo Profile"
            ></PhotoProfile>
            <Visibility status={status} />
          </div>
          <Tags tags={userTags} />
        </Flex>
        <DefinitionSection visibility={visibil} />
      </Flex>
      <MiniSection data={ratings} />
    </Flex>
  );
};
