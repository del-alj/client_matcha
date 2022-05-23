import React, { useState } from "react";
import { Button } from "./style.js";
import { Menu } from "../menu";

export const Burger = (props) => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Button
        onClick={(e) => {
          setDisplay(!display);
        }}
      >
        <span>
          <svg viewBox="0 0 24 24" width="37" height="37">
            <path
              fill="currentColor"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            ></path>
          </svg>
        </span>
      </Button>
      {display && props?.listMenu && <Menu menuList={props?.listMenu} />}
    </>
  );
};
