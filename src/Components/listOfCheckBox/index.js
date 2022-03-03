import React, { useState, useContext } from "react";

import { Flex } from "../styles/Container.styles";
import { CheckBox, Input } from "./style";
import { validation } from "../../assets/validationSchema/editProfile";
import { UserContext } from "../../Components/contexts/usercontext";

export const ListCheckBox = (props) => {
  const { element } = props;
  const [userdetails, setUserDetails] = useContext(UserContext);

  const handelChange = (e) => {
    const newData = { ...userdetails };
    newData["preference"] = e.target.checked ? e.target.value : "";
    setUserDetails(newData);
  };

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
              id={`Preference${elem}`}
              name={elem}
              defaultValue={elem}
              // onChange={onChange}
              {...validation[elem[index]]}
              onChange={handelChange}
              checked={elem === userdetails?.preference ? true : false}
              autofocus={false}

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
