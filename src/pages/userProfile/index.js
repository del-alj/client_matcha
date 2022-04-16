import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../layouts/signinLayout";
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import { Content } from "./style";

import { UserContext } from "../../Components/contexts/usercontext";
import { authentication } from "../../Components/contexts/usecontext";
import { ImageContext } from "../../Components/contexts/imageContext";
import { getUser, getUserImages, getLook } from "../editProfile/tools";

export const UserProfile = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);
  const { auth } = useContext(authentication);

  let { id } = useParams();
  const url = `/user/${id ? id : auth.userId}`;
  const urlImages = `/picture/${id ? id : auth.userId}`;
  useEffect(() => {
    getUser(url, setUserDetails);
  }, [id ? id : auth?.userId]);

  useEffect(() => {
    getUserImages(urlImages, setImageDetails);
  }, [auth?.userId]);

  useEffect(() => {
    if (id && auth?.userId && id !== auth?.userId)
   {
     getLook({ 
    user_id: id,
    looker_user_id: parseInt(auth?.userId)})}
  }, [id, auth.userId]);
console.log("im here", id)
  return (
    <Layout login={true}>
      <Content>
        <FirstSection
          status="online"
        />
        <SecondSection />
      </Content>
    </Layout>
  );
};
