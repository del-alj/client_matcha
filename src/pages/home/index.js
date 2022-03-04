import React from "react";

import { Layout } from "../../layouts/signinLayout";
import {
  Content,
  Homebackground,
} from "../../Components/styles/Container.styles";

import home from "../../assets/home.jpg";

const Home = () => {
  return (
    <Layout display>
      <Content>
        <Homebackground picture={home}>
          <h1>Matcha</h1>
          <p>find the one, in the hole universe</p>
        </Homebackground>
      </Content>
    </Layout>
  );
};

export { Home };
