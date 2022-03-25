import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../layouts/signinLayout";
import { FirstSection } from "./firstSection";
import { SecondSection } from "./secondSection";
import { ThirdSection } from "./thirdSection";

import { Content, Blurry } from "./style";
import { Button, Flex } from "../../Components/styles/Container.styles";

import { UserContext } from "../../Components/contexts/usercontext";
import { useHistory } from "react-router-dom";
import { authentication } from "../../Components/contexts/usecontext";
import { ImageContext } from "../../Components/contexts/imageContext";

import { get_photoprofile } from "../../tools/get_photoprofle";
import { updateUser, getUserImages, getUser } from "./tools";

const user_id = localStorage.getItem("userId");
const url = `/user/${user_id}`;
const urledit = `/user/edit/${user_id}`;

export const EditProfile = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);
  const [photoProfile, setPhotoProfile] = useState();
  const [disable, setDisable] = useState(true);
  const [userdetails, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);
  const urlImages = `/picture/${auth.userId}`;

  useEffect(() => {
    getUser(url, setUserDetails);
  }, []);

  useEffect(() => {
    getUserImages(urlImages, setImageDetails);
  }, [auth?.userId]);
  useEffect(() => {
    get_photoprofile(imageDetails, userdetails, setPhotoProfile);
  }, [auth?.userId, imageDetails, userdetails]);

  const submit = (e) => {
    console.log("urledit, userdetails");
    e.preventDefault();
    updateUser(urledit, userdetails, history);
  };

  const handelChange = (e) => {
    setDisable(false);
    const newData = { ...userdetails };
    newData[e.target.id] = e.target.value;
    setUserDetails(newData);
    console.log(newData);
  };

  return (
    <Layout login={true}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        {/* <Blurry /> */}
        <Content onSubmit={(e) => submit(e)}>
          <div
            style={{
              display: "block",
              justifyContent: "center",
              paddingBottom: "9rem",
            }}
          >
            <Content
              style={{
                display: "flex",
              }}
            >
              <FirstSection photoProfile={photoProfile?.image_path} />
              <SecondSection handelChange={handelChange} />
              <ThirdSection handelChange={handelChange} />
            </Content>
            <Button
              disabled={disable}
              style={{ width: "15rem", margin: "auto" }}
              onClick={() => {
                updateUser(urledit, userdetails, history);
                history.push("/profile");
              }}
            >
              Edit
            </Button>
          </div>
        </Content>
      </Flex>
    </Layout>
  );
};
