import React from "react";

import { Slider } from "../../Components/slider";
import { Flex } from "../../Components/styles/Container.styles";

export const SecondSection = (props) => {
  const { photos } = props;

  return (
    <Flex height="700px" direction="row" justifyContent="center">
      <Slider photos={photos} />
    </Flex>
  );
};
