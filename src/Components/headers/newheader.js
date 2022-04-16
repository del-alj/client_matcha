import React, { useContext } from "react";
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
import { Icon } from "../icon";
import envelope from "../../assets/icons/envelope.png";
import love from "../../assets/icons/love.png";
import profileImg from "../../assets/venus.jpg";
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
        <Icon img={envelope} alt="Messages" />
        <Icon img={love} alt="like" />
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
