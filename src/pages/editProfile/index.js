import React from "react";

import { Layout } from "../../layouts/signinLayout";
import { FirstSection } from "./firstSection";
import { SecondSection } from "./secondSection";
import { ThirdSection } from "./thirdSection";

import { Content, Blurry } from "./style";
import { Button, Flex } from "../../Components/styles/Container.styles";

import forgot from "../../assets/forgot.jpg";
import home from "../../assets/home.png";
import mars from "../../assets/mars.jpg";
import venus from "../../assets/venus.jpg";

const photoProfile = venus;
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

const personaleInfo = {
  userName: "Diana",
  firstName: "Ama",
  lastName: "Diana",
  bio: "This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.",
  gender: "woman",
  preferences: "Man",
  age: "24",
  email: "Diana@gmail.com",
};
const pictures = [forgot, home, home, mars, venus];

const local = "khouribga, Morocco";

export const EditProfile = () => {
  return (
    <Layout login={true}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        style={{
          // border: "1px solid black",
          position: "relative",
        }}
      >
        {/* <Blurry /> */}
        <Content>
          <FirstSection
            tags={tags}
            photoProfile={photoProfile}
            pictures={pictures}
          />
          <SecondSection personaleInfo={personaleInfo} />
          <ThirdSection personaleInfo={personaleInfo} local={local} />
        </Content>
        <Button style={{ width: "15rem" }}>Edit</Button>
      </Flex>
    </Layout>
  );
};
