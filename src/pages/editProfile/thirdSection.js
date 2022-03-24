import React, { useContext, useState, useEffect } from "react";

import { InputFull } from "../../Components/input/inputFull";
import { Flex } from "../../Components/styles/Container.styles";
import { Localisation } from "../../Components/localisation";
import { validation } from "../../assets/validationSchema/editProfile";

import { UserContext } from "../../Components/contexts/usercontext";

export const ThirdSection = (props) => {
  const { handelChange } = props;
  const [userdetails, setUserDetails] = useContext(UserContext);

  return (
    <Flex justifyContent="center" style={{ padding: "0rem 2rem" }}>
      <Flex direction="row">
        <Flex direction="column">
          <Localisation />
          <InputFull
            onChange={handelChange}
            placeholder="First Name"
            name="firstName"
            label="First Name"
            text={userdetails?.firstName}
            {...validation["firstName"]}
          />
          <InputFull
            onChange={handelChange}
            placeholder="Last Name"
            name="lastName"
            label="Last Name"
            text={userdetails?.lastName}
            {...validation["lastName"]}
          />
          <InputFull
            onChange={handelChange}
            placeholder="User Name"
            name="userName"
            label="username"
            text={userdetails?.userName}
            {...validation["userName"]}
          />
          <InputFull
            onChange={handelChange}
            placeholder="Email"
            name="email"
            label="Email"
            text={userdetails?.email}
            type="mail"
            {...validation["email"]}
          />
          <InputFull
            onChange={handelChange}
            placeholder="Age"
            name="age"
            label="Age"
            text={0}
            value={userdetails?.age}
            type="number"
            // {...validation["age"]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
