import React, { useContext } from "react";

import { Tags } from "../../Components/tag";
import { Visibility } from "../../Components/visibility";
import { Flex } from "../../Components/styles/Container.styles";
import { PhotoProfile } from "./style";
import { DefinitionSection } from "./tools/definition";
import { MiniSection } from "./tools/miniSection";

import Context from "../../Components/contexts/usecontext";

export const FirstSection = (props) => {
  // const data = useContext(Context);
  // console.log(data);
  // const token = localStorage.getItem("Token");
  // console.log(token);

  const { status, tags, ratings, photoProfile } = props;
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
          <Tags tags={tags} />
        </Flex>
        <DefinitionSection visibility={true} />
      </Flex>
      <MiniSection data={ratings} />
    </Flex>
  );
};
