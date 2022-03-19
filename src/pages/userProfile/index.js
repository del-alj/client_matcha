import React, { useContext, useEffect, useState } from "react";

import { Layout } from "../../layouts/signinLayout";
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import { Content } from "./style";

import { UserContext } from "../../Components/contexts/usercontext";
import { authentication } from "../../Components/contexts/usecontext";
import { ImageContext } from "../../Components/contexts/imageContext";

import { get_photoprofile } from "../../tools/get_photoprofle";
import { getUser, getUserImages } from "../editProfile/tools";

const ratings = {
  rating: "5",
  liked: "100",
  looked: "170",
};

export const UserProfile = (props) => {
  const [photoProfile, setPhotoProfile] = useState();
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);
  const { auth } = useContext(authentication);

  const url = `/user/${auth.userId}`;
  const urlImages = `/picture/${auth.userId}`;

  useEffect(() => {
    getUser(url, setUserDetails);
  }, []);
  useEffect(() => {
    getUserImages(urlImages, setImageDetails);
  }, [auth?.userId]);

  useEffect(() => {
    get_photoprofile(imageDetails, userDetails, setPhotoProfile);
  }, [auth?.userId, imageDetails, userDetails]);

  return (
    <Layout login={true}>
      <Content>
        <FirstSection
          status="online"
          ratings={ratings}
          photoProfile={photoProfile?.image_path}
        />
        <SecondSection />
      </Content>
    </Layout>
  );
};
