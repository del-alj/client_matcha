import React, { useContext, useState, useEffect } from "react";

import { InputFull } from "../../Components/input/inputFull";
import { ListCheckBox } from "../../Components/listOfCheckBox";
import { Flex } from "../../Components/styles/Container.styles";
import { Select } from "./style";
import { UserContext } from "../../Components/contexts/usercontext";
import { validation } from "../../assets/validationSchema/editProfile";

const genders = ["Woman", "Man"];

export const SecondSection = (props) => {
  const { handelChange } = props;
  const [userdetails, setUserDetails] = useContext(UserContext);

  return (
    <Flex justifyContent="center" style={{ padding: "7rem 2rem 2rem 0" }}>
      <Flex direction="row">
        <Flex direction="column" alignItems="flex-start">
          <h1 style={{ margin: "0px" }}>{userdetails?.userName}</h1>
          <InputFull
            onChange={handelChange}
            placeholder="bio"
            name="bio"
            label="Bio"
            text={userdetails?.bio}
            type="textarea"
          />
          <Select name="gender" title="Gender" list={genders} />
          <ListCheckBox
            titel="Preferences"
            element={genders}
            style={{
              border: "1px solid red",
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
