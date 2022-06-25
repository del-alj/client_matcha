import React from "react";

import {
  Header,
  Menu,
  StyledLink,
} from "../styles/Container.styles";
import {Div} from "./style";
import menu from "../../assets/icons/menu.png";
import { connect } from "./tools/menusList";
import { Icon } from "../icon";
const HomeHeader = ({ displayRightSide }) => {
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
      <Div>
        <Icon img={menu} alt="Profile" type="profile" listMenu={connect} />
      </Div>
    </Header>
  );
};

HomeHeader.defaultProps = {
  displayRightSide: false,
};

export { HomeHeader };
