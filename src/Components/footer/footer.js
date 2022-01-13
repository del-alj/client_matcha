import React from "react";

import { Footer } from "../styles/Container.styles";

const HomeFooter = () => {
  return (
    <Footer>
      <p>Copyright Matcha ©{new Date().getFullYear()} by del-alj</p>
    </Footer>
  );
};

export { HomeFooter };
