import React from "react";

import { Ul, Li } from "./style";

export const Menu = (props) => {
  const { menuList } = props;
  return (
    <Ul>
      {menuList.map((elem, index) => (
        <Li key={`li${index}`}>
          <a key={`a${index}`} href={elem?.link}>
            {elem?.title}
          </a>
        </Li>
      ))}
    </Ul>
  );
};
