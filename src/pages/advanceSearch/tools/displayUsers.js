import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { DivImg, Img, Blur } from "../style";
import { CartInfoDiv } from "./cardInfo";

export const DisplayUsers = (props) => {
  let history = useHistory();

  const { users } = props;
  console.log("this is : ", users);
  return (
    <>
      <DivImg>
        {users.map((elem, index) => (
          <div
            key={`div${index}`}
            style={{
              margin: "5em",
              position: "relative",
            }}
            onClick={() => {
              console.log("test", elem?.user_id);
            }}
          >
            <Blur> </Blur>
            <Img status={true} key={`img${index}`} src={elem?.image_path} />

            <CartInfoDiv
              name={elem?.user_name}
              age={elem?.age}
              city={`${elem?.distance?.toFixed(1)}Km`}
              rating={"8"}
            />
          </div>
        ))}
      </DivImg>
    </>
  );
};
