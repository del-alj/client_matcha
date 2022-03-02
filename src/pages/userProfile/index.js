import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import { Content } from "./style";

//
import home from "../../assets/home.png";
import mars from "../../assets/mars.jpg";
import venus from "../../assets/venus.jpg";
import { autontication } from "../../Components/contexts/usecontext";

import { UserContext } from "../../Components/contexts/usercontext";
import useGetReqHook from "../../hooks/useGetReqHook";
import { ThemeProvider } from "styled-components";

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

const photos = [venus, home, mars];

const photoProfile = photos[1];

const ratings = {
  rating: "5",
  liked: "100",
  looked: "170",
};

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

export const UserProfile = (props) => {
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

  return (
    <Layout>
      <Content>
        <FirstSection
          status="online"
          tags={tags}
          ratings={ratings}
          photoProfile={photoProfile}
        />
        <SecondSection photos={photos} />
      </Content>
    </Layout>
  );
};
