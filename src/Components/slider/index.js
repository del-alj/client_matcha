import React, { useState } from "react";

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

export const Slider = (props) => {
  const [index, setIndex] = useState(0);

  const slideToRight = (e) => {
    if (index < numberOfPictures - 1) {
      setIndex(index + 1);
    } else setIndex(0);
  };

  const slideToLeft = (e) => {
    if (index > 0) {
      setIndex(index - 1);
    } else setIndex(numberOfPictures - 1);
  };

  const { photos } = props;
  const numberOfPictures = photos.length;
  return (
    <Content
      paddingTop="2rem"
      direction="row"
      justifyContent="center"
      alignContent="center"
    >
      <SliderPictureDiv order={2}>
        <SliderPicture
          src={photos[index]?.image_path}
          alt={photos[index]?.image_name}
        ></SliderPicture>
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
