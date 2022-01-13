import React from "react";

import { Header, Menu, StyledLink } from "../styles/Container.styles";
const HomeHeader = ({ displayRightSide }) => {
  return (
    <Header>
      <StyledLink to="/home" color="black" inline="none">
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
