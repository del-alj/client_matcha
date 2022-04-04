import React, { useContext, useEffect, useState } from "react";
import { Div, SecDiv, H5, SliderRange, Slider, NewAgs } from "../style";
import { useHistory } from "react-router-dom";
import { authentication } from "../../../Components/contexts/usecontext";

export const AgeBar = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(60);

  const lowerSlider = document.querySelector("#lower");
  const upperSlider = document.querySelector("#upper");
  const [lowerVal, setLowerVal] = useState();
  const [upperVal, setUpperVal] = useState();

  const onChangeMinAge = (e) => {
    setLowerVal(parseInt(lowerSlider?.value));
    setUpperVal(parseInt(upperSlider?.value));
    console.log(lowerSlider.value, e.target.value);
    if (e.target.value > maxAge - 1) {
      upperSlider.value = lowerVal + 1;

      if (upperVal === upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - 1;
      }
    }
    setMinAge(e.target?.value);
    setMaxAge(upperSlider?.value);
  };
  const onChangeMaxAge = (e) => {
    setLowerVal(parseInt(lowerSlider.value));
    setUpperVal(parseInt(upperSlider.value));

    if (e.target?.value < minAge + 1) {
      lowerSlider.value = upperVal - 1;

      if (lowerVal === lowerSlider.min) {
        upperSlider.value = 1;
      }
    }
    setMinAge(lowerSlider.value);
    setMaxAge(upperSlider.value);
  };

  return (
    <Div>
      <H5>{props.title}</H5>
      <SecDiv>
        <SliderRange>
          <NewAgs>
            <p style={{ lineHeight: "0px" }}>{minAge}</p>
            <p style={{ lineHeight: "0px" }}>{maxAge}</p>
          </NewAgs>
          <Slider>
            <span class="multi-range">
              <input
                type="range"
                min="18"
                max="60"
                defaultValue={minAge}
                onInput={onChangeMinAge}
                id="lower"
              />
              <input
                type="range"
                min="18"
                max="60"
                defaultValue={maxAge}
                onInput={onChangeMaxAge}
                id="upper"
              />
            </span>
          </Slider>
        </SliderRange>
      </SecDiv>
    </Div>
  );
};;;;;;;;
