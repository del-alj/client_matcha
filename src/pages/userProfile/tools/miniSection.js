import React, { useContext } from "react";

import { Icon, LikeIcon } from "../../../Components/icon";
import { Flex, Features } from "../style";
import { calRating } from "../../../tools/calculeRating";
import { UserContext } from "../../../Components/contexts/usercontext";
import { Burger } from "../../../Components/burger";
import {settings} from "./menusList";
import crown from "../../../assets/icons/crown.png";
import heart from "../../../assets/icons/heart.png";
import eye from "../../../assets/icons/eye.png";

export const MiniSection = (props) => {
  const [userDetails] = useContext(UserContext);
  const data = { like: userDetails?.likesList, vue: userDetails?.vuesList };
  const rating = calRating(data);

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
          <h1>{rating}</h1>
        </Features>
        <Features>
          <LikeIcon img={heart} alt="like" />
          <h1>{userDetails?.likesList?.length}</h1>
        </Features>
        <Features>
          <Icon img={eye} alt="vue" />
          <h1>{userDetails?.vuesList?.length}</h1>
        </Features>
        <Features>
          <Burger listMenu={settings}/>
        </Features>
      </Flex>
    </Flex>
  );
};
