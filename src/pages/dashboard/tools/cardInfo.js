import React from "react";

import { CartInfo, RatingDiv, InfoSection, Features } from "../style";
import { Icon } from "../../../Components/icon";
import crown from "../../../assets/icons/crown.png";

export const CartInfoDiv = (props) => {
  const { name, age, city, rating } = props;
  return (
    <CartInfo>
      <InfoSection>
        <p
          style={{
            fontSize: "1.5em",
          }}
        >
          {name},
          <span
            style={{
              fontSize: "1em",
            }}
          >
            {age}
          </span>
        </p>
        <p
          style={{
            fontSize: "1em",
          }}
        >
          {city}
        </p>
      </InfoSection>
      <RatingDiv>
        <Features>
          <Icon img={crown} alt="rantion" />
          <h1>{rating}</h1>
        </Features>
      </RatingDiv>
    </CartInfo>
  );
};