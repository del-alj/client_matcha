import React from "react";

// import useLocalStorage from '../../hooks/useLocaleStorage';
import { Flex, H1, H4, P } from "../style";

export const DefinitionSection = (props) => {
  const data = props.data;
  return (
    <Flex width="auto" direction="column" alignItems="flex-start">
      <H1>{data?.userName}</H1>
      <H4>
        {data?.firstName} {data?.lastName}
      </H4>
      <P>{data?.bio}</P>
    </Flex>
  );
};
