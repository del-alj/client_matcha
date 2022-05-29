import React, { useContext, useEffect, useState } from "react";

import { Layout } from "../../layouts/signinLayout";
import { Content } from "../dashboard/style";

export const NotificationsPage = (props) => {
  return (
    <Layout login={true}>
      <Content>
        <h1>Notifications</h1>
      </Content>
    </Layout>
  );
};
