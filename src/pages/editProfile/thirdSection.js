import React from "react";

import { InputFull } from "../../Components/input/inputFull";
import { Flex } from "../../Components/styles/Container.styles";
import { Localisation } from "./style";
import { Icon } from "../../Components/icon";
import gps from "../../assets/icons/gps.png";

export const ThirdSection = (props) => {
  const { personaleInfo, local } = props;

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
            text={personaleInfo.firstName}
          />
          <InputFull
            name="lastName"
            label="Last Name"
            text={personaleInfo.lastName}
          />
          <InputFull
            name="userName"
            label="username"
            text={personaleInfo.userName}
          />
          <InputFull
            name="email"
            label="Email"
            text={personaleInfo.email}
            type="mail"
          />
          <InputFull
            name="age"
            label="Age"
            text={personaleInfo.age}
            type="number"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
