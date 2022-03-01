import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import { Content } from "./style";

//
import home from "../../assets/home.png";
import mars from "../../assets/mars.jpg";
import venus from "../../assets/venus.jpg";
import { autontication } from "../../Components/contexts/usecontext";

import { UserContext } from "../../Components/contexts/usercontext";
import useGetReqHook from "../../hooks/useGetReqHook";

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

const photos = [venus, home, mars];

const photoProfile = photos[1];

const ratings = {
  rating: "5",
  liked: "100",
  looked: "170",
};

const personaleInfo = {
  userName: "Diana",
  firstName: "Ama",
  lastName: "Diana",
  bio: "This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.",
  gender: "woman",
  preferences: "Man",
  age: "24",
  email: "Diana@gmail.com",
};
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const UserProfile = (props) => {
  // const data = useContext(autontication);
  const { userdetails, setUserDetails } = useContext(UserContext);
  const token = localStorage.getItem("Token");

  let history = useHistory();
  const user_id = localStorage.getItem("userId");
  const url = `user/${user_id}`;

  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const { data, isPending, Error } = useGetReqHook(url, "get", config);
  console.log(data, isPending, Error);
  // axios
  //   .get(url, config)
  //   .then((res) => {
  //     console.log("from userprofile : ", res?.data);
  //     res.json(res?.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  console.log("prps", props);
  // setUserDetails({
  //   userName: res?.data?.user?.user_name,
  //   firstName: res?.data?.user?.first_name,
  //   lastName: res?.data?.user?.last_name,
  //   email: res?.data?.user?.email,
  //   id: res?.data?.user?.id,
  // });

  // const value = useContext(UserContext);
  // setValue("ok");
  // const user = value["value"];
  // console.log("from profile :", user);
  return (
    <Layout>
      <Content>
        <FirstSection
          status="online"
          tags={tags}
          personaleInfo={personaleInfo}
          ratings={ratings}
          photoProfile={photoProfile}
        />
        <SecondSection photos={photos} />
      </Content>
    </Layout>
  );
};
