import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

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
import { UserContext } from "../../Components/contexts/usercontext";

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

const BASE_URL = process.env.REACT_APP_BASE_URL;

const user_id = localStorage.getItem("userId");
const url = `${BASE_URL}/user/${user_id}`;

const token = JSON.parse(localStorage.getItem("Token"));
const config = {
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const EditProfile = (props) => {
  const [userData, setUserData] = useState({});
  const [userdetails, setUserDetails] = useContext(UserContext);

  const getUser = async (url, config) => {
    const dataUser = await axios
      .get(url, config)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    return dataUser;
  };

  useEffect(() => {
    getUser(url, config);
    setUserDetails({
      userName: userData?.user_name,
      firstName: userData?.first_name,
      lastName: userData?.last_name,
      email: userData?.email,
      id: userData?.id,
    });
  }, []);

  console.log("test");

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
          <ThirdSection local={local} />
        </Content>
        <Button style={{ width: "15rem" }}>Edit</Button>
      </Flex>
    </Layout>
  );
};
