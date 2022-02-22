import React from "react";
import { useHistory } from "react-router-dom";

import {
  Header,
  Menu,
  StyledLink,
  SearchDiv,
  Search,
} from "../styles/Container.styles";
import { List } from "./style";

import { Logout } from "../LogoutButton/Logout";
import { Icon } from "../icon";
import envelope from "../../assets/icons/envelope.png";
import love from "../../assets/icons/love.png";
import profileImg from "../../assets/venus.jpg";
const NewHeader = ({ display }) => {
  let history = useHistory();

  const handleClick = () => {
    Logout(history);
  };
  return (
    <Header>
      {/* <div> */}
      <StyledLink to="/" color="black" inline="none">
        Matcha
      </StyledLink>
      {/* </div> */}
      <SearchDiv>
        <Search placeholder="Search" />
      </SearchDiv>
      <List>
        <Icon img={envelope} alt="Messages" />
        <Icon img={love} alt="like" />
        <Icon img={profileImg} alt="Profile" type="profile" />
      </List>
    </Header>
  );
};

NewHeader.defaultProps = {
  display: false,
};

export { NewHeader };