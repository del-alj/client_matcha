import React, { useContext, useEffect, useState } from "react";
import moment from "moment";

import { Layout } from "../../layouts/signinLayout";
import { Content } from "../dashboard/style";
import { NotificationContent, Box } from "../notifications/style";
import { getNotification, updateNotificationStatus } from "./tools";
import { authentication } from "../../Components/contexts/usecontext";
import { Loading } from "../../Components/loading";

const getSendingTime = (date) => {
  return moment(date).startOf().fromNow();
};
export const NotificationsPage = (props) => {
  const { auth } = useContext(authentication);
  const url = `/notification/${auth.userId}`;

  const [notifications, setNotifications] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNotification(url, setNotifications);
    updateNotificationStatus(url, setNotifications);
  }, []);

  useEffect(() => {
    if (notifications) setIsLoading(true);
  }, [notifications]);

  return (
    <Layout login={true}>
      <Content style={{ flexDirection: "column" }}>
        <h1>Notifications</h1>
       { isLoading ? <Box>
          {notifications?.map((elem, index) => (
            <NotificationContent key={`span${index}`}>
              <a href={`/user/${elem?.from_id}`}>
                {elem?.title} {elem?.text} you on{" "}
                {getSendingTime(elem?.creat_at)}.
              </a>
            </NotificationContent>
          ))}
        </Box> : <Loading/>}
      </Content>
    </Layout>
  );
};
