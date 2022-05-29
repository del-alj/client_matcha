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

const NewHeader = ({ display }) => {
  let history = useHistory();
  const { setAuth } = useContext(authentication);

  const handleClick = () => {
    Logout(setAuth);
    history.push("/");
  };

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
          history={history}
        />
        <IconNotification
          img={notif}
          alt="Notifications"
          type="notification"
          history={history}
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
