import React, { useContext, useEffect, useState } from "react";

import {
  MiniCartInfo,
  RatingDiv,
  InfoSection,
  Features,
} from "../../dashboard/style";

import crown from "../../../assets/icons/crown.png";

export const CartInfoDiv = (props) => {
  const { name, age, city, rating } = props;
  return (
    <MiniCartInfo>
      <InfoSection>
        <p
          style={{
            color: "white",
          }}
        >
          {name},
          <span
            style={{
              fontSize: "1em",
              color: "white",
            }}
          >
            {age}
          </span>
        </p>
        <p
          style={{
            fontSize: "1em",
            color: "white",
          }}
        >
          {city}
        </p>
      </InfoSection>
      <RatingDiv>
        <Features>
          <img
            style={{
              filter: "invert(100%)",
            }}
            src={crown}
            alt={"rantion"}
          />
          <h1
            style={{
              fontSize: "1em",
              color: "white",
              justifyItems: "center",
            }}
          >
            {rating}
          </h1>
        </Features>
      </RatingDiv>
    </MiniCartInfo>
  );
};
