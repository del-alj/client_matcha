import React from "react";

import { HomeHeader } from "../Components/header/header";
import { HomeFooter } from "../Components/footer/footer";

export const Layout = (props) => (
  <>
    <HomeHeader displayRightSide={props?.display} />
    <main>{props.children}</main>
    <HomeFooter />
  </>
);
