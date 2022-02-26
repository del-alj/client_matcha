import React from "react";

import { HomeHeader } from "../Components/headers/header";
import { NewHeader } from "../Components/headers/newheader";

import { HomeFooter } from "../Components/footer/footer";

export const Layout = (props) => {
  const { login } = props;
  return (
    <>
      {login ? (
        <NewHeader display={props?.display} />
      ) : (
        <HomeHeader displayRightSide={props?.display} />
      )}
      {login ? (
        <main
          style={{
            padding: "calc(80px + 2rem) 2rem 0rem",
          }}
        >
          {props.children}
        </main>
      ) : (
        <main>{props.children}</main>
      )}
      <HomeFooter />
    </>
  );
};
