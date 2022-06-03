import React, { useEffect, useState } from "react";
import { Div, SecDiv, H5, SliderRange, Slider, NewAgs } from "../style";

export const AgeBar = (props) => {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(60);

  const lowerSlider = document.querySelector("#min");
  const upperSlider = document.querySelector("#max");
  const [lowerVal, setLowerVal] = useState();
  const [upperVal, setUpperVal] = useState();
  const { data, setData } = props;
  const onChangeMinAge = (e) => {
    setLowerVal(parseInt(lowerSlider?.value));
    setUpperVal(parseInt(upperSlider?.value));
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

  useEffect(() => {
    const newData = { ...data };
    newData["age"] = { min: minAge, max: maxAge };
    setData(newData);
  }, [minAge, maxAge]);

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
            <span className="multi-range" style={{width: "200px"}}>
              <input
                type="range"
                min="18"
                max="60"
                defaultValue={minAge}
                onInput={onChangeMinAge}
                id="min"
                name="min"
                style={{width: "200px"}}
              />
              <input
                type="range"
                min="18"
                max="60"
                defaultValue={maxAge}
                onInput={onChangeMaxAge}
                id="max"
                name="max"
                style={{width: "200px"}}
              />
            </span>
          </Slider>
        </SliderRange>
      </SecDiv>
    </Div>
  );
};
