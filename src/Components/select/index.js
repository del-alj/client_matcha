import React from "react";

import { Select } from "./style";

export const InitSelect = (props) => {
  const element = props.list;
  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>
      <Select width="21rem" id={props.name} name={props.name}>
        {element.map((elem, index) => (
          <option key={index} value={elem}>
            {elem}
          </option>
        ))}
      </Select>
    </>
  );
};
