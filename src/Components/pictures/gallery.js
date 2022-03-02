import React from "react";

import { AddNew } from "./addNew";
import { Div, Img } from "./style";

export const Gallery = (props) => {
  const { pictures } = props;
  return (
    <Div>
      {pictures.map((picture) => (
        <Img src={picture} />
      ))}
    </Div>
  );
};

export const EditGallery = (props) => {
  const { pictures } = props;
  const status = pictures.length !== 0 ? false : true;
  return (
    <Div status={status}>
      {pictures.map((picture) => (
        <Img src={picture} />
      ))}
      <AddNew />
    </Div>
  );
};