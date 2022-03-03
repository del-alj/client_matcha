import React from "react";

import { Flex } from "../styles/Container.styles";
import { CheckBox, Input } from "./style";
import { validation } from "../../assets/validationSchema/editProfile";

export const ListCheckBox = (props) => {
  const { element, onChange } = props;

  return (
    <Flex direction="column">
      <h5
        style={{ textAlign: "initial", fontSize: "16px", fontWeight: "normal" }}
      >
        Preferences
      </h5>
      <Flex direction="row">
        {element.map((elem, index) => (
          <CheckBox key={index} value={index[index]}>
            <Input
              type="checkbox"
              id={`checkbox${elem}`}
              name={`checkbox${elem}`}
              onChange={onChange}
              {...validation[elem[index]]}
              // checked={`checked${index}`}
              // onChange={() => `setChecked${index}`((prev) => !prev)}
            />
            <div>
              <label htmlFor={`checkbox${elem}`}>{elem}</label>
            </div>
          </CheckBox>
        ))}
      </Flex>
    </Flex>
  );
};
