import React from "react";

import { HomeHeader } from "../Components/headers/header";
import { NewHeader } from "../Components/headers/newheader";

import { HomeFooter } from "../Components/footer/footer";

export const Layout = (props) => (
  <>
    {/* <HomeHeader displayRightSide={props?.display} /> */}
    <NewHeader display={props?.display} />
    <main
      style={{
        padding: "calc(80px + 2rem) 2rem 0rem",
      }}
    >
      {props.children}
    </main>
    <HomeFooter />
  </>
);
