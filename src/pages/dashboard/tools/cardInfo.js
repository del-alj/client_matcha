import React, { useContext, useEffect, useState } from "react";

import { CartInfo, RatingDiv, InfoSection } from "../style";
import { Icon } from "../../../Components/icon";
import { Features } from "../../userProfile/style";
import crown from "../../../assets/icons/crown.png";

export const CartInfoDiv = (props) => {
  const { name, age, city, rating } = props;
  return (
    <CartInfo>
      <InfoSection
        style={
          {
            // border: "1px solid yellow",
          }
        }
      >
        <h1>
          {name},
          <span
            style={{
              fontSize: "16px",
            }}
          >
            {age}
          </span>
        </h1>
        <h3>{city}</h3>
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
