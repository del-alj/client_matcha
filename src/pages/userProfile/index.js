import React from 'react';

import { Layout } from '../../layouts/signinLayout';
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
import home from "../../assets/home.png";

import { Content } from "./style";

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

export const UserProfile = () => {
  return (
    <Layout>
      <Content>
        <FirstSection status="online" tags={tags} />
        <SecondSection photos={home} />
      </Content>
    </Layout>
  );
};
