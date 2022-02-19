import React from "react";

import { HomeHeader } from "../Components/headers/header";
import { NewHeader } from "../Components/headers/newheader";

import { HomeFooter } from "../Components/footer/footer";

export const Layout = (props) => (
  <>
    {/* <HomeHeader displayRightSide={props?.display} /> */}
    <NewHeader display={props?.display} />
    <main>{props.children}</main>
    <HomeFooter />
  </>
);
