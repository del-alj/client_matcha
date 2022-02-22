import React from "react";

import { Flex } from "../styles/Container.styles";
import { SliderPicture, SliderButton } from "./style";
import home from "../../assets/home.png";
import mars from "../../assets/mars.jpg";

const slideToRight = (e) => {
  // e.preventDefault();
  console.log("slideToRight");
};

const slideToLeft = (e) => {
  // e.preventDefault();
  console.log("slideToLeft");
};

export const Slider = (props) => {
  // const { photos } = props;

  const photos = [home, mars];

  return (
    <Flex
      paddingTop="5rem"
      direction="row"
      justifyContent="center"
      alignContent="center"
      style={{ paddingBlockEnd: "5rem" }}
    >
      <SliderButton onClick={slideToLeft}>{`<`}</SliderButton>
      <SliderPicture src={home} alt="{props.alt}" />
      <SliderButton onClick={slideToRight}>{`>`}</SliderButton>
    </Flex>
  );
};
