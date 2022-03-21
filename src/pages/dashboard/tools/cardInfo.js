import React, { useContext, useEffect, useState } from "react";

import { CartInfo, RatingDiv, InfoSection } from "../style";
import { Icon } from "../../../Components/icon";
import { Features } from "../../userProfile/style";
import crown from "../../../assets/icons/crown.png";

export const CartInfoDiv = (props) => {
  const { name, age, city, rating } = props;
  return (
    <CartInfo>
      <InfoSection>
        <p
          style={{
            fontSize: "1.5rem",
          }}
        >
          {name},
          <span
            style={{
              fontSize: "1rem",
            }}
          >
            {age}
          </span>
        </p>
        <p
          style={{
            fontSize: "1rem",
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
