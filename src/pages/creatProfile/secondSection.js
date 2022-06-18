import React, { useContext } from "react";

import { InputFull } from "../../Components/input/inputFull";
import { ListCheckBox } from "../../Components/listOfCheckBox";
import { Flex } from "../../Components/styles/Container.styles";
import { Select } from "./style";
import { UserContext } from "../../Components/contexts/usercontext";

const genders = ["Woman", "Man"];
const preferences = ["Woman", "Man", "Bisex"];

export const SecondSection = (props) => {
  const { handelChange } = props;
  const [userdetails] = useContext(UserContext);

  return (
    <Flex justifyContent="center" style={{ padding: "7rem 2rem 2rem 0" }}>
      <Flex direction="row">
        <Flex direction="column" alignItems="baseline !important">
          <h1 style={{ margin: "0px" }}>{userdetails?.userName}</h1>
          <InputFull
            onChange={handelChange}
            placeholder="bio"
            name="bio"
            label="Bio"
            text={userdetails?.bio}
            type="textarea"
          />
          <Select
            name="gender"
            title="Gender"
            list={genders}
            onChange={handelChange}
            value={userdetails?.gender}
          />
          <ListCheckBox
            onChange={handelChange}
            titel="Preferences"
            element={preferences}
            style={{
              border: "1px solid red",
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
