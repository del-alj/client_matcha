import React from "react";

import { Select } from "./style";

export const InitSelect = (props) => {
  const element = props.list;
  const { onChange } = props;
  return (
    <>
      <label htmlFor={props.name}>{props.title}</label>
      <Select
        width="21rem"
        id={props.name}
        name={props.name}
        onChange={onChange}

      >
           <option key={"d0"} value={"none"} selected disabled hidden>
            {"Select a Gender"}
          </option>
        {element.map((elem, index) => (
          <option key={index} value={elem}>
            {elem}
          </option>
        ))}
      </Select>
    </>
  );
};
