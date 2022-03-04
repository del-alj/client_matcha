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
import { UserContext } from "../../Components/contexts/usercontext";

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



const BASE_URL = process.env.REACT_APP_BASE_URL;



export const UserProfile = (props) => {
  const [_, setUserDetails] = useContext(UserContext);

  const user_id = localStorage.getItem("userId");
  const url = `${BASE_URL}/user/${user_id}`;

  const token = `Bearer ${JSON.parse(localStorage.getItem("Token"))}`;
  const config = {
    headers: {
      "content-Type": "application/json",
      authorization: token,
    },
  };

  const getUser = async (url, config) => {
    await axios
      .get(url, config)
      .then((res) => {
        setUserDetails({
          userName: res.data?.user_name,
          firstName: res.data?.first_name,
          lastName: res.data?.last_name,
          email: res.data?.email,
          bio: res.data?.bio,
          age: res.data?.age,
          gender: res.data?.gender,
          preference: res.data?.preference,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUser(url, config);
  }, []);

  return (
    <Layout login={true}>
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
