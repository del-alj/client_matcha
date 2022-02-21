import React from "react";

// import useLocalStorage from '../../hooks/useLocaleStorage';
import { Icon } from "../../../Components/icon";
import { Flex, Features } from "../style";
import { Button } from "../../../Components/styles/Container.styles";
import crown from "../../../assets/icons/crown.png";
import heart from "../../../assets/icons/heart.png";
import eye from "../../../assets/icons/eye.png";

const data = {
  ranting: "5",
  liked: "100",
  looked: "170",
};

export const MiniSection = () => {
  // const [name, setName] = useLocalStorage("name", () => "");
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
          <h1>{data.ranting}</h1>
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
      {/* <Flex width="auto" height="none">
        <Button>Edit Profile</Button>
      </Flex> */}
    </Flex>
  );
};
