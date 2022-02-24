import React from "react";

import { Flex } from "../styles/Container.styles";
import { CheckBox, Input } from "./style";
export const ListCheckBox = (props) => {
  const { element } = props;

  return (
    <Flex direction="column">
      <h5
        style={{ textAlign: "initial", fontSize: "16px", fontWeight: "normal" }}
      >
        Preferences
      </h5>
      <Flex direction="row">
        {element.map((elem) => (
          <CheckBox>
            <Input
              type="checkbox"
              id={`checkbox${elem}`}
              name={`checkbox${elem}`}
              // checked={`checked${index}`}
              // onChange={() => `setChecked${index}`((prev) => !prev)}
            />
            <div>
              <label for={`checkbox${elem}`}>{elem}</label>
            </div>
          </CheckBox>
        ))}
      </Flex>
    </Flex>
  );
};
