import React from "react";

import { Layout } from "../../layouts/signinLayout";
import { Content, Box } from "./style";

export const Report = (props) => {
  console.log("test");
  return (
    <Layout login={true}>
      <Content>
        <Box>
          <h1>error</h1>
        </Box>
      </Content>
    </Layout>
  );
};
