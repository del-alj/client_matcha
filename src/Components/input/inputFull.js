import React from "react";
import { validation } from "../../assets/validationSchema/editProfile";

import { Div, Input, Label, Textarea } from "./style";

export const InputFull = (props) => {
  const { onChange, placeholder } = props;
  return (
    <Div>
      <Label htmlFor={props.name}>{props.label}</Label>
      {props.type === "textarea" ? (
        <Textarea
          onChange={onChange}
          {...validation[props.name]}
          placeholder={placeholder}
          name={props.name}
          id={props.name}
          defaultValue={props.text}
        ></Textarea>
      ) : (
        <Input
          onChange={onChange}
          {...validation[props.name]}
          placeholder={placeholder}
          name={props.name}
          id={props.name}
          defaultValue={props.text}
          type={props.type}
        />
      )}
    </Div>
  );
};
