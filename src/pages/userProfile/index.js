import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import { Content } from "./style";

import { UserContext } from "../../Components/contexts/usercontext";
import { autontication } from "../../Components/contexts/usecontext";
import { ImageContext } from "../../Components/contexts/imageContext";

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

const ratings = {
  rating: "5",
  liked: "100",
  looked: "170",
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const UserProfile = (props) => {
  const [userImages, setUserImages] = useState([]);
  const [_, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);
  const { auth } = useContext(autontication);

  const url = `${BASE_URL}/user/${auth.userId}`;
  const urlImages = `${BASE_URL}/picture/${auth.userId}`;

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

  const getUserImages = async (url, config) => {
    await axios
      .get(url, config)
      .then((res) => {
        setImageDetails(res?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUser(url, config);
  }, []);
  useEffect(() => {
    getUserImages(urlImages, config);
  }, [auth?.userId]);
  const photoProfile = imageDetails[0]?.image_path;
  return (
    <Layout login={true}>
      <Content>
        <FirstSection
          status="online"
          tags={tags}
          ratings={ratings}
          photoProfile={photoProfile}
        />
        <SecondSection />
      </Content>
    </Layout>
  );
};
