import React from "react";
import { Button, Img } from "./style.js";
const Icon = (props) => {
  return (
    <Button>
      <Img src={props.img} alt={props.alt} type={props.type} />
    </Button>
  );
};

export { Icon };
