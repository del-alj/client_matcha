import React, { useState } from "react";

import { Flex } from "../styles/Container.styles";
import { Content } from "./style";
import {
  SliderPicture,
  SliderButton,
  IconSlid,
  SliderDiv,
  SliderPictureDiv,
} from "./style";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import home from "../../assets/home.png";
import mars from "../../assets/mars.jpg";

export const Slider = (props) => {
  const [index, setIndex] = useState(0);
  const slideToRight = (e) => {
    if (index < numberOfPictures - 1) {
      setIndex(index + 1);
    } else setIndex(0);

    console.log("slideToRight", index);
  };

  const slideToLeft = (e) => {
    // e.preventDefault();
    console.log("slideToLeft", index);
    if (index > 0) {
      setIndex(index - 1);
    } else setIndex(numberOfPictures - 1);
  };
  const photos = [home, mars];

  // const { photos } = props;
  const numberOfPictures = props.numberOfPictures;
  return (
    <Content
      paddingTop="2rem"
      direction="row"
      justifyContent="center"
      alignContent="center"
    >
      <SliderPictureDiv order={2}>
        <SliderPicture src={photos[index]} alt="{props.alt}" />{" "}
      </SliderPictureDiv>
      <SliderDiv order={1}>
        <SliderButton onClick={slideToLeft}>
          <IconSlid src={left} />
        </SliderButton>
      </SliderDiv>
      <SliderDiv order={2}>
        <SliderButton onClick={slideToRight}>
          <IconSlid src={right} />
        </SliderButton>
      </SliderDiv>
    </Content>
  );
};
