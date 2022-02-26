import React from "react";

import { Icon } from "../../../Components/icon";
import { Flex, Features } from "../style";
import crown from "../../../assets/icons/crown.png";
import heart from "../../../assets/icons/heart.png";
import eye from "../../../assets/icons/eye.png";

export const MiniSection = (props) => {
  const { data } = props;
  return (
    <Flex
      direction="column"
      paddingTop="5rem"
      style={{
        alignItems: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <Flex height="none" direction="row !important">
        <Features>
          <Icon img={crown} alt="rantion" />
          <h1>{data.rating}</h1>
        </Features>
        <Features>
          <Icon img={heart} alt="like" />
          <h1>{data.liked}</h1>
        </Features>
        <Features>
          <Icon img={eye} alt="vue" />
          <h1>{data.looked}</h1>
        </Features>
      </Flex>
    </Flex>
  );
};
