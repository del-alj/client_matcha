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

import io from "socket.io-client";

export const UserProfile = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);
  const { auth } = useContext(authentication);

  const env = `${process.env.REACT_APP__ENV}:7000`;

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
    if (id && auth?.userId && id !== auth?.userId) {
      getLook({
        user_id: id,
        looker_user_id: parseInt(auth?.userId),
      });
    }
  }, [id, auth.userId]);

  // useEffect(() => {
  //   // const socket = io(env, {
  //   //   extraHeaders: {
  //   //     Authorization: auth?.userId
  //   //   }
  //   // });

  //   // socket?.connect();
  //   // const socket = auth?.socket;

  //   //get status
  //   if (id) {
  //     auth?.socket?.emit("statusUser", { userId: id });
  //     auth?.socket?.on("statusUser", (data) => {
  //       console.log("this is status", data);
  //       data && setstatus(data);
  //     });
  //   }
  // }, [auth, id]);

  return (
    <Layout login={true}>
      <Content>
        <FirstSection />
        <SecondSection />
      </Content>
    </Layout>
  );
};
