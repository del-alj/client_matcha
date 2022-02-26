import React from 'react';

import { Layout } from '../../layouts/signinLayout';
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import { Content } from "./style";

//
import home from "../../assets/home.png";
import mars from "../../assets/mars.jpg";
import venus from "../../assets/venus.jpg";

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

export const UserProfile = () => {
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
