import React from "react";

import { Layout } from "../../layouts/signinLayout";
import { FirstSection } from "./firstSection";
import { SecondSection } from "./secondSection";
import { ThirdSection } from "./thirdSection";

import { Content } from "./style";
import { Button, Flex } from "../../Components/styles/Container.styles";

const tags = [
  {
    link: "#",
    titel: "piercing",
  },
  {
    link: "#",
    titel: "geek",
  },
  {
    link: "#",
    titel: "vegan",
  },
];

const info = {
  userName: "Diana",
  firstName: "Ama",
  lastName: "Diana",
  bio: "This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.",
  gender: "woman",
  preferences: "Man",
  age: "24",
  email: "Diana@gmail.com",
};

const local = "khouribga, Morocco";

export const EditProfile = () => {
  return (
    <Layout>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        // style={{
        //   border: "1px solid black",
        // }}
      >
        <Content>
          <FirstSection tags={tags} />
          <SecondSection info={info} />
          <ThirdSection info={info} local={local} />
        </Content>
        <Button style={{ width: "15rem" }}>Edit</Button>
      </Flex>
    </Layout>
  );
};
