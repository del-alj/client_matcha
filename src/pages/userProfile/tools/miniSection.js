import React from "react";

// import useLocalStorage from '../../hooks/useLocaleStorage';
import { Icon } from "../../../Components/icon";
import { Flex, Features } from "../style";
import { Button } from "../../../Components/styles/Container.styles";
import crown from "../../../assets/icons/crown.png";
import heart from "../../../assets/icons/heart.png";
import eye from "../../../assets/icons/eye.png";

export const MiniSection = () => {
  // const [name, setName] = useLocalStorage("name", () => "");
  return (
    <Flex
      width="auto"
      direction="column"
      style={{
        // border: "1px solid red",
        justifyContent: "baseline",
        alignItems: "flex-end",
      }}
    >
      <Flex width="100%" height="none" direction="row">
        <Features>
          <Icon img={crown} alt="rantion" />
          <h1>5</h1>
        </Features>
        <Features>
          <Icon img={heart} alt="like" />
          <h1>100</h1>
        </Features>
        <Features>
          <Icon img={eye} alt="vue" />
          <h1>170</h1>
        </Features>
      </Flex>
      <Flex width="auto" height="none" direction="row">
        <Button minWidth="200px">Edit Profile</Button>
      </Flex>
    </Flex>
  );
};
