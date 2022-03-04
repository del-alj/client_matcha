import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import { Content } from "./style";

//
import home from "../../assets/home.jpg";
import mars from "../../assets/mars.jpg";
import venus from "../../assets/venus.jpg";
import { UserContext } from "../../Components/contexts/usercontext";
import { autontication } from "../../Components/contexts/usecontext";

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
  const { auth } = useContext(autontication);

  const url = `${BASE_URL}/user/${auth.userId}`;
  const token = `Bearer ${auth.token}`;
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
