import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { DivImg, Img, Blur, Heart } from "../style";
import { CartInfoDiv } from "./cardInfo";
import heart from "../../../assets/icons/heart.png";
export const DisplayUsers = (props) => {
  let history = useHistory();

  const { users } = props;
  console.log("this is : ", users);
  return (
    <>
      <DivImg>
        {users.map((elem, index) => (
          <Blur
            key={`div${index}`}
            style={{
              margin: "5em",
              position: "relative",
            }}
            onClick={() => {
              console.log("test", elem?.user_id);
            }}
          >
            <Img status={true} key={`img${index}`} src={elem?.image_path} />
            <Heart display={true}>
              <img src={heart} style={{ width: "50px", height: "auto" }} />
            </Heart>
            <CartInfoDiv
              name={elem?.user_name}
              age={elem?.age}
              city={`${elem?.distance?.toFixed(1)}Km`}
              rating={"8"}
            />
          </Blur>
        ))}
      </DivImg>
    </>
  );
};
