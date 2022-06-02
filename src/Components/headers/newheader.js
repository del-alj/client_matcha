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
import { getIfMsgNotification, getNotificationStatus } from "../../pages/notifications/tools";

const NewHeader = ({ display }) => {
  let history = useHistory();
  const { auth, setAuth } = useContext(authentication);
  const [notifications, setNotifications] = useState([]);
  const [status, setStatus] = useState(false);
  const [msgStatus, setMsgStatus] = useState(false);
  const handleClick = () => {
    Logout(setAuth);
    history.push("/");
  };

  useEffect(() => {
    //ma3raftx xni dirt
    getNotificationStatus(`/notification/${auth.userId}`, setStatus);
    getIfMsgNotification(`/notification/msg/${auth?.userId}`, setMsgStatus);
  }, []);

  return (
    <Header backgroundColor>
      <StyledLink to="/" color="black" inline="none">
        Matcha
      </StyledLink>
      <List>
        <IconNotification
          img={envelope}
          alt="Messages"
          type="message"
          history={history}
          status={msgStatus}
          setStatus={setMsgStatus}
        />
        <IconNotification
          img={notif}
          alt="Notifications"
          type="notification"
          history={history}
          status={status}
          setStatus={setStatus}
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
