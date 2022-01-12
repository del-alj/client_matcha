import React from "react";

import { Content, Homebackground } from "../../styles/Container.styles";
import home from "../../../images/home.png";
const Home = () => {
  return (
    <Content>
      <Homebackground picture={home}>
        <h1>Matcha</h1>
        <p>find the one, in the hole universe</p>
        {/* <img src={home} alt="Home" /> */}
      </Homebackground>
    </Content>
  );
};

export { Home };