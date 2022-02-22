import React from "react";

import { Flex, H4 } from "../style";
export const MoreInfoDiv = (props) => {
  return (
    <Flex direction="column" alignItems="flex-start">
      <H4>Gender : {props.info.gender}</H4>
      <H4>Preferences : {props.info.preferences}</H4>
      <H4>Age : {props.info.age}</H4>
    </Flex>
  );
};
