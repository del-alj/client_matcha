import React from "react";

import { Layout } from "../../layouts/signinLayout";
import {
  Content,
  Homebackground,
  Opacity, Ptyping,
} from "../../Components/styles/Container.styles";

import home from "../../assets/home.png";

const Home = () => {
  return (
    <Layout display>
      <Content>
          <Opacity />
        <Homebackground picture={home}>
          <h1 style={{zIndex:99}}>Matcha</h1>
          <Ptyping style={{zIndex:99}}>find the one, in the hole universe</Ptyping>
        </Homebackground>
      </Content>
    </Layout>
  );
};

export { Home };
