import React, { useState } from "react";
import { Button, Img } from "./style.js";

import { Menu } from "../headers/tools/menu";
const Icon = (props) => {
  const {history} = props;
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Button
        onClick={(e) => {
          setDisplay(!display);
          if (props?.alt === "Messages")
          history.push("/messages");
        }}
      >
        <Img src={props.img} alt={props.alt} type={props.type} />
      </Button>
      {display && props?.listMenu && <Menu menuList={props?.listMenu} />}
    </>
  );
};

export { Icon };
