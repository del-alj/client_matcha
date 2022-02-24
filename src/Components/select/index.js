import React from "react";

import { Select } from "./style";

export const InitSelect = (props) => {
  const element = props.list;
  return (
    <>
      <label for={props.name}>{props.title}</label>
      <Select width="21rem" id={props.name} name={props.name}>
        {element.map((elem) => (
          <option value={elem}>{elem}</option>
        ))}
      </Select>
    </>
  );
};
