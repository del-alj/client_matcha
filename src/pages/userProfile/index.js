import React from 'react';

import { Layout } from '../../layouts/signinLayout';
import { SecondSection } from "./secondSection";
import { FirstSection } from "./firstSection";
// import useLocalStorage from '../../hooks/useLocaleStorage';
import { Content } from "./style";

export const UserProfile = () => {
  // const [name, setName] = useLocalStorage("name", () => "");
  return (
    <Layout>
      <Content>
        {/* <div style={{ marginTop: "100px" }}>User profile</div> */}
        <FirstSection />
        {/* <SecondSection /> */}
      </Content>
    </Layout>
  );
};
