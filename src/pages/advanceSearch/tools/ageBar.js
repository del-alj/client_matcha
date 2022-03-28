import React, { useContext, useEffect, useState } from "react";
import { Div, SecDiv, H5, SliderRange, Slider, NewAgs } from "../style";
import { useHistory } from "react-router-dom";
import { authentication } from "../../../Components/contexts/usecontext";

export const AgeBar = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(60);

  const onChangeMinAge = (e) => {
    if (e.target.value < maxAge) setMinAge(e.target.value);
  };
  const onChangeMaxAge = (e) => {
    if (e.target.value > minAge) setMaxAge(e.target.value);
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
};
