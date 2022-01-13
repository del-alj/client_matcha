import React from "react";

import { Header, Menu, Link } from "../styles/Container.styles";

const HomeHeader = ({ displayRightSide }) => {
  return (
    <Header>
      <Link href="/home" color="black" inline="none">
        Matcha
      </Link>
      {displayRightSide && (
        <Menu>
          <Link href="/login" color="black" inline="none">
            Login
          </Link>
          <Link href="/signup" color="black" inline="none">
            Sign up
          </Link>
        </Menu>
      )}
    </Header>
  );
};

HomeHeader.defaultProps = {
  displayRightSide: false,
};

export { HomeHeader };
