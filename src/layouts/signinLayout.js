import React from "react";

import { HomeHeader } from "../Components/header/header";
import { HomeFooter } from "../Components/footer/footer";

export const Layout = ({ children }) => (
  <>
    <HomeHeader />
    <main>{children}</main>
    <HomeFooter />
  </>
);
