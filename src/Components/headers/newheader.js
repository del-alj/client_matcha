import React, { useContext, useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { authentication } from "../contexts/usecontext";
import {
  Header,
  StyledLink,
  StyledLinkLogout,
} from "../styles/Container.styles";
import { List } from "./style";
import { Logout } from "../LogoutButton/Logout";
import { Icon, IconNotification } from "../icon";
import envelope from "../../assets/icons/envelope.png";
import notif from "../../assets/icons/notification.png";
import gear from "../../assets/icons/gear.png";
import { settings } from "./tools/menusList";

const notificationMessages = [
  {
    title: "dina",
    text: "blalbla blaba",
    status: false,
    path: "",
  },
  {
    title: "bani",
    text: "Testblalbla blaba msg blalbla blaba",
    status: false,
    path: "",
  },
  {
    title: "nina",
    text: "blalbla blaba",
    status: false,
    path: "",
  },
  {
    title: "victoria",
    text: "blalbla blaba",
    status: false,
    path: "",
  },
];

const NewHeader = ({ display }) => {
  let history = useHistory();
  const { auth, setAuth } = useContext(authentication);
  const handleClick = () => {
    Logout(setAuth);
    history.push("/");
  };

  const [notifications, setNotifications] = useState([]);
  const [notificationState, setNotificationState] = useState({
    displayMenu: false,
    history: history,
    notificationStatus: false,
  });

  const [notificationMsgState, setNotificationMsgState] = useState({
    displayMenu: false,
    listMenu: notificationMessages,
    history: history,
    notificationStatus: false,
  });

  const privateNotification = useCallback((data) => {
    setNotifications((data) => {
      const newNotifications = [...notifications];
      if (data) {
        const temp = {
          ...data,
          title: `${data?.name || data?.from}`,
          text: `${data?.status ? "Like" : "Unlike"} you`,
          status: false,
          path: "",
        };
        newNotifications?.push(temp);
      }
      return newNotifications;
    });
  }, []);

  useEffect(() => {
    auth.socket?.on("notification", (data) => {
      setNotificationState({ ...notificationState, notificationStatus: true });
      privateNotification(data);
    });
  }, [auth]);

  console.log("socket on notification", notificationState, notifications);
  return (
    <Header backgroundColor>
      <StyledLink to="/" color="black" inline="none">
        Matcha
      </StyledLink>
      <List>
        <IconNotification
          img={envelope}
          alt="Messages"
          type="messages"
          listMenu={notificationMessages}
          notificationState={notificationMsgState}
          setNotificationState={setNotificationMsgState}
        />
        <IconNotification
          img={notif}
          alt="notification"
          type="notification"
          listMenu={notifications}
          notificationState={notificationState}
          setNotificationState={setNotificationState}
        />
        <Icon img={gear} alt="Profile" type="profile" listMenu={settings} />
        <StyledLinkLogout onClick={handleClick}>Logout</StyledLinkLogout>
      </List>
    </Header>
  );
};

NewHeader.defaultProps = {
  display: false,
};

export { NewHeader };
