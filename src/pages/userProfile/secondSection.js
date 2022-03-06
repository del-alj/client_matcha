import React, { useContext } from "react";

import { Slider } from "../../Components/slider";
import { Flex } from "../../Components/styles/Container.styles";

import { ImageContext } from "../../Components/contexts/imageContext";

export const SecondSection = (props) => {
  const [imageDetails] = useContext(ImageContext);

  console.log("this is list of pictures", imageDetails);
  return (
    <Flex height="700px" direction="row" justifyContent="center">
      <Slider photos={imageDetails} />
    </Flex>
  );
};
