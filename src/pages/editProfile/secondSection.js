import React from "react";

import { InputFull } from "../../Components/input/inputFull";
import { ListCheckBox } from "../../Components/listOfCheckBox";
import { Flex } from "../../Components/styles/Container.styles";
import { Select } from "./style";

export const SecondSection = (props) => {
  const { personaleInfo } = props;

  const genders = ["Woman", "Man"];
  return (
    <Flex justifyContent="center" style={{ padding: "7rem 2rem 2rem 0" }}>
      <Flex direction="row">
        <Flex direction="column" alignItems="flex-start">
          <h1 style={{ margin: "0px" }}>{personaleInfo.userName}</h1>
          <InputFull
            name="bio"
            label="Bio"
            text={personaleInfo.bio}
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
