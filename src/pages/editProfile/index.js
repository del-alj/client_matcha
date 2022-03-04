import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Layout } from "../../layouts/signinLayout";
import { FirstSection } from "./firstSection";
import { SecondSection } from "./secondSection";
import { ThirdSection } from "./thirdSection";

import { Content, Blurry } from "./style";
import { Button, Flex } from "../../Components/styles/Container.styles";

import forgot from "../../assets/forgot.jpg";
import home from "../../assets/home.jpg";
import mars from "../../assets/mars.jpg";
import venus from "../../assets/venus.jpg";
import { UserContext } from "../../Components/contexts/usercontext";
import { useHistory } from "react-router-dom";

const photoProfile = venus;

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

const pictures = [forgot, home, home, mars, venus];

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
  const [userdetails, setUserDetails] = useContext(UserContext);
  const [disable, setDisable] = useState(true);
  const getUser = async (url, config) => {
    await axios
      .get(url, config)
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
        });
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
                photoProfile={photoProfile}
                pictures={pictures}
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
