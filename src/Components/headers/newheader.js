import React from "react";
import { useHistory } from "react-router-dom";

import {
  Header,
  Menu,
  StyledLink,
  SearchDiv,
  Search,
} from "../styles/Container.styles";
import { Logout } from "../LogoutButton/Logout";

const envelope = "../../assets/icons/envelope.png";

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
      <Menu>
        {/* <div style={{ background: " url(envelope) no-repeat 10px center" }}>
          <img url={envelope} alt="test" />
        </div> */}
        <button class="btn">
          <i class="fa fa-bars"></i>
        </button>
        <button class="btn">
          <i class="fa fa-bars"></i>
        </button>
        <button class="btn">
          <i class="fa fa-trash"></i>
        </button>
      </Menu>
    </Header>
  );
};

NewHeader.defaultProps = {
  display: false,
};

export { NewHeader };
