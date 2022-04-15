import React from "react";
import { Div, SecDiv, H5 } from "../style";
import { Input } from "../../../Components/input/style";
import { validation } from "../../../assets/validationSchema/localization";

export const LocalizationBar = (props) => {
  const { handelChange } = props;
  return (
    <Div>
      <H5>{props.title}</H5>
      <SecDiv>
        <Input
          style={{ background: "#e6e6e6" }}
          onChange={handelChange}
          placeholder={"City"}
          name={props.name}
          id={props.name}
          defaultValue={props.text}
          type={props.type}
          {...validation["localization"]}
        />
      </SecDiv>
    </Div>
  );
};
