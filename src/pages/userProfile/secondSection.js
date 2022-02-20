import React from "react";

import { Layout } from "../../layouts/signinLayout";
// import useLocalStorage from '../../hooks/useLocaleStorage';
import { Content, Flex } from "./style";

export const SecondSection = () => {
  // const [name, setName] = useLocalStorage("name", () => "");
  return (
    <Flex background="red" height="700px" direction="row">
      <Flex
        background="blue"
        width="70%"
        direction="row"
        justifyContent="center"
      >
        {" "}
        test
      </Flex>
    </Flex>
  );
};
