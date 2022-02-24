import React from "react";

import { Flex } from "../../Components/styles/Container.styles";

import { InputFull } from "../../Components/input/inputFull";
import { Localisation } from "./style";
import { Icon } from "../../Components/icon";
import gps from "../../assets/icons/gps.png";

export const ThirdSection = (props) => {
  const { info, local } = props;

  return (
    <Flex justifyContent="center" style={{ padding: "0rem 2rem" }}>
      <Flex direction="row">
        <Flex direction="column">
          <Localisation>
            <Icon img={gps} alt="localisation" />
            <h3 style={{ margin: "0px" }}>{local}</h3>
          </Localisation>
          <InputFull
            name="firstName"
            label="First Name"
            text={info.firstName}
          />
          <InputFull name="lastName" label="Last Name" text={info.lastName} />
          <InputFull name="userName" label="username" text={info.userName} />
          <InputFull name="email" label="Email" text={info.email} type="mail" />
          <InputFull name="age" label="Age" text={info.age} type="number" />
        </Flex>
      </Flex>
    </Flex>
  );
};
