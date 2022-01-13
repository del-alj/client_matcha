import React from "react";

import { Header, Menu, Link } from "../styles/Container.styles";

const HomeHeader = () => {
  return (
    <Header>
      <a>Matcha</a>
      <Menu>
        <Link href="/login" color="black" inline="none">
          Login
        </Link>
        <Link href="/signup" color="black" inline="none">
          Sign up
        </Link>
      </Menu>
    </Header>
  );
};

export { HomeHeader };
