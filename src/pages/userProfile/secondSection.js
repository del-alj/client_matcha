import React from "react";

import { Flex } from "../../Components/styles/Container.styles";
import { Slider } from "../../Components/slider";

export const SecondSection = (props) => {
  const { photos } = props;

  return (
    <Flex
      // style={{ border: "1px solid black" }}
      height="700px"
      direction="row"
      justifyContent="center"
    >
      <Slider potos={photos} numberOfPictures="3" />
    </Flex>
  );
};
