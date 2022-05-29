import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

import { Layout } from "../../layouts/signinLayout";
import { Content } from "../dashboard/style";
import { NotificationContent, Box } from "../notifications/style";
import { getNotification } from "./tools";
import { authentication } from "../../Components/contexts/usecontext";

const getSendingTime = (date) => {
  return moment(date).startOf().fromNow();
};
export const NotificationsPage = (props) => {
  // const location = useLocation();
  // const notifications = location.state;
  const { auth } = useContext(authentication);
  const url = `/notification/${auth.userId}`;

  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    getNotification(url, setNotifications);
  }, []);

  return (
    <Layout login={true}>
      <Content style={{ flexDirection: "column" }}>
        <h1>Notifications</h1>
        <Box>
          {notifications.map((elem, index) => (
            <NotificationContent key={`span${index}`}>
              <a href={`/user/${elem?.from}`}>
                {elem?.title} {elem?.text} you on{" "}
                {getSendingTime(elem?.creat_at)}.
              </a>
            </NotificationContent>
          ))}
        </Box>
      </Content>
    </Layout>
  );
};
