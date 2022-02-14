import React from 'react';

import { Layout } from '../../layouts/signinLayout';
// import useLocalStorage from '../../hooks/useLocaleStorage';
import { Content } from "../../Components/styles/Container.styles";
export const UserProfile = () => {
  // const [name, setName] = useLocalStorage("name", () => "");
  return (
    <Layout>
      <Content>
        <div style={{ marginTop: "100px" }}>User profile</div>
      </Content>
    </Layout>
  );
};
