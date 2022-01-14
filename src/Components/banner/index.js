import React from "react";

import { BannerStyle, Div } from "./style.js";
const Banner = (props) => {
  return (
    <Div>
      <BannerStyle background={props?.background}>
        <h1>{props?.title}</h1>
        <p>{props?.text}</p>
      </BannerStyle>
    </Div>
  );
};
export { Banner };
