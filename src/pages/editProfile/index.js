import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
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

const user_id = localStorage.getItem("userId");
const url = `/user/${user_id}`;

const urledit = `/user/edit/${user_id}`;

export const EditProfile = (props) => {
  let history = useHistory();
  const { auth } = useContext(autontication);
  const [photoProfile, setPhotoProfile] = useState();
  const [userdetails, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);

  const [disable, setDisable] = useState(true);
  const urlImages = `/picture/${auth.userId}`;

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

  const updateUser = async (url, param) => {
    console.info("param", param);

    await axiosInstance
      .put(url, param)
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
    getUser(url);
  }, []);

  useEffect(() => {
    getUserImages(urlImages);
  }, [auth?.userId]);
  useEffect(() => {
    get_photoprofile(imageDetails, userdetails, setPhotoProfile);
  }, [auth?.userId, imageDetails, userdetails]);

  const submit = (e) => {
    console.log("urledit, userdetails");
    e.preventDefault();
    updateUser(urledit, userdetails);
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
        // style={{
        //   position: "relative",
        // }}
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
              // type="submit"
              style={{ width: "15rem", margin: "auto" }}
              onClick={() => {
                console.log("here button edite profile");
                updateUser(urledit, userdetails);
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
