import React, { useContext, useEffect, useState } from "react";
import {
  Div,
  SecDiv,
  H5,
  SliderRange,
  Slider,
  InitialeAgs,
  NewAgs,
} from "../style";
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
      <SecDiv style={{ border: "1px solid black" }}>
        <SliderRange>
          <InitialeAgs>
            <p style={{ lineHeight: "0px" }}>18</p>
            <p style={{ lineHeight: "0px" }}>60</p>
          </InitialeAgs>
          <div style={{ position: "absolute", width: "300px" }}>
            <Slider
              style={{ position: "relative", top: "20px" }}
              type="range"
              min="18"
              max="60"
              defaultValue={minAge}
              onChange={onChangeMinAge}
              step="1"
              id="myRange"
            />
            <Slider
              style={{ position: "relative" }}
              type="range"
              min="18"
              max="60"
              defaultValue={maxAge}
              onChange={onChangeMaxAge}
              step="1"
              id="myRange"
            />
          </div>
          <NewAgs>
            <p style={{ lineHeight: "0px" }}>{minAge}</p>
            <p style={{ lineHeight: "0px" }}>{maxAge}</p>
          </NewAgs>
        </SliderRange>
      </SecDiv>
    </Div>
  );
};
