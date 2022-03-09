import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import { useHistory } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import { Content } from "./style";

import { UserContext } from "../../Components/contexts/usercontext";
import { autontication } from "../../Components/contexts/usecontext";
import { ImageContext } from "../../Components/contexts/imageContext";

import { get_photoprofile } from "../../tools/get_photoprofle";
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

export const UserProfile = (props) => {
  const [userImages, setUserImages] = useState([]);
  const [photoProfile, setPhotoProfile] = useState();
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);
  const { auth } = useContext(autontication);

  const url = `/user/${auth.userId}`;
  const urlImages = `/picture/${auth.userId}`;

  const token = `Bearer ${auth.token}`;

  const getUser = async (url) => {
    await axiosInstance
      .get(url)
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
          photoProfileId: res.data?.photo_profile_id,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getUserImages = async (url) => {
    await axiosInstance
      .get(url)
      .then((res) => {
        setImageDetails(res?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUser(url);
  }, []);
  useEffect(() => {
    getUserImages(urlImages);
  }, [auth?.userId]);

  useEffect(() => {
    get_photoprofile(imageDetails, userDetails, setPhotoProfile);
  }, [auth?.userId, imageDetails, userDetails]);

  return (
    <Layout login={true}>
      <Content>
        <FirstSection
          status="online"
          tags={tags}
          ratings={ratings}
          photoProfile={photoProfile?.image_path}
        />
        <SecondSection />
      </Content>
    </Layout>
  );
};
