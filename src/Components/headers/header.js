import React from "react";
import { useHistory } from "react-router-dom";

import {
  Header,
  Menu,
  StyledLink,
  StyledLinkLogout,
} from "../styles/Container.styles";
import { Logout } from "../LogoutButton/Logout";

const HomeHeader = ({ displayRightSide }) => {
  let history = useHistory();

  const handleClick = () => {
    Logout(history);
  };
  return (
    <Header>
      <StyledLink to="/" color="black" inline="none">
        Matcha
      </StyledLink>
      {displayRightSide && (
        <Menu>
          <StyledLink to="/login" color="black" inline="none">
            Login
          </StyledLink>
          <StyledLink to="/signup" color="black" inline="none">
            Sign up
          </StyledLink>
        </Menu>
      )}
    </Header>
  );
};

HomeHeader.defaultProps = {
  displayRightSide: false,
};

export { HomeHeader };
