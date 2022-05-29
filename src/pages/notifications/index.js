import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { Content } from "../dashboard/style";
import  {NotificationContent, Box} from "../notifications/style";

export const NotificationsPage = (props) => {
  // const { notifications } = props;
  const location = useLocation();
  const notifications = location.state; // it is equal to yourData
  console.log("this is notifications ", notifications);
  return (
    <Layout login={true}>
      <Content style={{ flexDirection: "column", border: "1 px solid black" }}>
        <h1>Notifications</h1>

        <Box>
          {notifications.map((elem, index) => (
            <NotificationContent key={`span${index}`} >
              <a href={`/user/${elem?.from}`}>
                {elem?.title} {elem?.text} you .
              </a>
            </NotificationContent>
          ))}
        </Box>
      </Content>
    </Layout>
  );
};
