import React, { useContext, useEffect, useState } from "react";
import { Div, SecDiv, H5 } from "../style";
import { Input } from "../../../Components/input/style";
import { useHistory } from "react-router-dom";
import { authentication } from "../../../Components/contexts/usecontext";

export const LocalizationBar = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);

  return (
    <Div>
      <H5>{props.title}</H5>
      <SecDiv>
        <Input
          style={{ background: "#e6e6e6" }}
          onChange={"onChange"}
          placeholder={"City"}
          name={props.name}
          id={props.name}
          defaultValue={props.text}
          type={props.type}
        />
      </SecDiv>
    </Div>
  );
};
