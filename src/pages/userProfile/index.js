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
  const url = `/user/${id ? id : auth.userId}/${auth.userId}`;
  const urlImages = `/picture/${id ? id : auth.userId}`;
  useEffect(() => {
    getUser(url, setUserDetails);
  }, [id ? id : auth?.userId]);

  useEffect(() => {
    getUserImages(urlImages, setImageDetails);
  }, [auth?.userId]);

  useEffect(async () => {
    if ( id && auth?.userId && id !== auth?.userId) {
      await getLook({
        user_id: id,
        looker_user_id: auth?.userId,
      })
        .then(async (data) => {
          const content = {
            userName:  auth?.userName || "someone",
            type: "view",
            status: true,
            from: auth?.userId ,
            to: id || null,
          };
          const NewContent = { ...content, status: false };
          auth?.socket?.emit("notification", {
            content: NewContent,
            to: content?.to,
          });
        })
        .catch(() => {});
    }
  }, [id, auth?.userId]);

  return (
    <Layout login={true}>
      {userDetails ? (
        <Content>
          <FirstSection />
          <SecondSection />
        </Content>
      ) : (
        <Content>
          <h1>error</h1>
        </Content>
      )}
    </Layout>
  );
};
