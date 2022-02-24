import React from "react";

import { Flex } from "../../Components/styles/Container.styles";
import { InputFull } from "../../Components/input/inputFull";
import { ListCheckBox } from "../../Components/listOfCheckBox";
import { Select } from "./style";

export const SecondSection = (props) => {
  // const [name, setName] = useLocalStorage("name", () => "");

  const { info } = props;

  const genders = ["Woman", "Man"];
  return (
    <Flex justifyContent="center" style={{ padding: "7rem 2rem 2rem 0" }}>
      <Flex direction="row">
        <Flex direction="column" alignItems="flex-start">
          <h1 style={{ margin: "0px" }}>{info.userName}</h1>
          <InputFull name="bio" label="Bio" text={info.bio} type="textarea" />
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
