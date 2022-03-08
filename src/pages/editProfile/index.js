import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Layout } from "../../layouts/signinLayout";
import { FirstSection } from "./firstSection";
import { SecondSection } from "./secondSection";
import { ThirdSection } from "./thirdSection";

import { Content, Blurry } from "./style";
import { Button, Flex } from "../../Components/styles/Container.styles";


import { UserContext } from "../../Components/contexts/usercontext";
import { useHistory } from "react-router-dom";
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

const local = "khouribga, Morocco";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const user_id = localStorage.getItem("userId");
const url = `${BASE_URL}/user/${user_id}`;

const urledit = `${BASE_URL}/user/edit/${user_id}`;
const token = JSON.parse(localStorage.getItem("Token"));
const config = {
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const EditProfile = (props) => {
  let history = useHistory();
  const { auth } = useContext(autontication);
  const [photoProfile, setPhotoProfile] = useState();
  const [userdetails, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);

  const [disable, setDisable] = useState(true);
  const urlImages = `${BASE_URL}/picture/${auth.userId}`;

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
          photoProfileId: res.data?.photo_profile_id,
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

  const updateUser = async (url, param, config) => {
    console.info("param", param);

    await axios
      .put(url, param, config)
      .then((res) => {
        setUserDetails({
          userName: res.data?.user_name,
          firstName: res.data?.first_name,
          lastName: res.data?.last_name,
          email: res.data?.email,
          // id: res.data?.id,
          bio: res.data?.bio,
          age: res.data?.age,
          gender: res.data?.gender,
          preference: res.data?.preference,
          photoProfileId: res.data?.photo_profile_id,
        });
        history.push("/profile");
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
  useEffect(() => {
    get_photoprofile(imageDetails, userdetails, setPhotoProfile);
  }, [auth?.userId, imageDetails, userdetails]);

  const submit = (e) => {
    e.preventDefault();
    updateUser(urledit, userdetails, config);
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
        style={{
          // border: "1px solid black",
          position: "relative",
        }}
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
              <FirstSection
                tags={tags}
                photoProfile={photoProfile?.image_path}
              />
              <SecondSection handelChange={handelChange} />
              <ThirdSection handelChange={handelChange} local={local} />
            </Content>
            <Button
              disabled={disable}
              type="submit"
              style={{ width: "15rem", margin: "auto" }}
            >
              Edit
            </Button>
          </div>
        </Content>
      </Flex>
    </Layout>
  );
};
