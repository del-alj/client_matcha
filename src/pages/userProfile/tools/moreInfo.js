import React from "react";

import { Flex, H4 } from "../style";

export const MoreInfoDiv = (props) => {
  const { personaleInfo } = props;

  return (
    <Flex direction="column" alignItems="flex-start">
      <H4>Gender : {personaleInfo.gender}</H4>
      <H4>Preferences : {personaleInfo.preference}</H4>
      <H4>Age : {personaleInfo.age}</H4>
    </Flex>
  );
};
