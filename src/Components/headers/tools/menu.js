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

export const MenuNotification = (props) => {
  const { menuList } = props;
  return (
    <Ul>
      {menuList.map((elem, index) => (
        <Li key={`li${index}`}>
          <a key={`a${index}`} href={elem?.path}>
            <h1>{elem?.title}</h1>
            <p>{elem?.text}</p>
          </a>
        </Li>
      ))}
      <Li>
      </Li>
    </Ul>
  );
};
