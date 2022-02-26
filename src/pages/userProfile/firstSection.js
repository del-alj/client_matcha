import React from "react";

import { Tags } from "../../Components/tag";
import { Visibility } from "../../Components/visibility";
import { Flex } from "../../Components/styles/Container.styles";
import { PhotoProfile } from "./style";
import { DefinitionSection } from "./tools/definition";
import { MiniSection } from "./tools/miniSection";

export const FirstSection = (props) => {
  const { status, tags, personaleInfo, ratings, photoProfile } = props;
  return (
    <Flex direction="row" justifyContent="center">
      <Flex direction="row">
        <Flex direction="column">
          <div>
            <PhotoProfile src={photoProfile} alt="Photo Profile"></PhotoProfile>
            <Visibility status={status} />
          </div>
          <Tags tags={tags} />
        </Flex>
        <DefinitionSection personaleInfo={personaleInfo} visibility={true} />
      </Flex>
      <MiniSection data={ratings} />
    </Flex>
  );
};
