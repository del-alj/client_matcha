import React from "react";

import { Div, Input, Label, Textarea } from "./style";

export const InputFull = (props) => {
  return (
    <Div>
      <Label for={props.name}>{props.label}</Label>
      {props.type === "textarea" ? (
        <Textarea
          name={props.name}
          id={props.name}
          defaultValue={props.text}
        ></Textarea>
      ) : (
        <Input
          name={props.name}
          id={props.name}
          defaultValue={props.text}
          type={props.type}
        />
      )}
    </Div>
  );
};
