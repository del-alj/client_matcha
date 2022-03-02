import React, { useContext } from "react";

import { InputFull } from "../../Components/input/inputFull";
import { Flex } from "../../Components/styles/Container.styles";
import { Localisation } from "./style";
import { Icon } from "../../Components/icon";
import gps from "../../assets/icons/gps.png";

import { UserContext } from "../../Components/contexts/usercontext";

export const ThirdSection = (props) => {
  const { local } = props;
  const [userdetails, setUserDetails] = useContext(UserContext);
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
            text={userdetails?.firstName}
          />
          <InputFull
            name="lastName"
            label="Last Name"
            text={userdetails?.lastName}
          />
          <InputFull
            name="userName"
            label="username"
            text={userdetails?.userName}
          />
          <InputFull
            name="email"
            label="Email"
            text={userdetails?.email}
            type="mail"
          />
          <InputFull
            name="age"
            label="Age"
            text={userdetails?.age}
            type="number"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
