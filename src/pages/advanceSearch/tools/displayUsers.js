import React from "react";

import { DivImg} from "../style";
import {ContinerCardInfo} from "./continerCardInfo";

export const DisplayUsers = (props) => {

  const { users } = props;
  return (
    <>
      <DivImg>
        {users.map((elem, index) => (
          <ContinerCardInfo user={elem} key={`continercard${index}`}  index={index}/>
        ))}
      </DivImg>
    </>
  );
};
