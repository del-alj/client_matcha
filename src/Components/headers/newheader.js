import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { authentication } from "../contexts/usecontext";
import {
  Header,
  StyledLink,
  SearchDiv,
  Search,
  StyledLinkLogout,
} from "../styles/Container.styles";
import { List } from "./style";
import { Logout } from "../LogoutButton/Logout";
import { Icon, IconNotification } from "../icon";
import envelope from "../../assets/icons/envelope.png";
import notif from "../../assets/icons/notification.png";
import profileImg from "../../assets/venus.jpg";
import { settings } from "./tools/menusList";

const notification = [{
  title: "dina",
  text: "blalbla blaba",
  status: false,
  path: "",
}, {
  title: "bani",
  text: "Testblalbla blaba blalbla blaba blalbla blaba blalbla blaba blalbla blaba",
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
},]

const  notificationMessages = [{
  title: "dina",
  text: "blalbla blaba",
  status: false,
  path: "",
}, {
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
},]

const NewHeader = ({ display }) => {
  let history = useHistory();
  const { setAuth } = useContext(authentication);
  const [displayMenu, setDisplayMenu] = useState(false);
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
        <IconNotification displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} img={envelope} alt="Messages" type="messages" listMenu={notificationMessages} history={history} />
        <IconNotification displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} img={notif} alt="like" type="notification" listMenu={notification} history={history} />
        <Icon 
          img={profileImg}
          alt="Profile"
          type="profile"
          listMenu={settings}
        />
        <StyledLinkLogout onClick={handleClick}>Logout</StyledLinkLogout>
      </List>
    </Header>
  );
};

NewHeader.defaultProps = {
  display: false,
};

export { NewHeader };
