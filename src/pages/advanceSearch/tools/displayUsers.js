import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { DivImg, Img, Blur, Heart, Bubbly } from "../style";
import { CartInfoDiv } from "./cardInfo";
import heart from "../../../assets/icons/heart.png";

const likeAnimateButton = (e) => {
  e.preventDefault(e);
  //reset animation
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  //hna khescondition dyal del likes and disabel

  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

export const DisplayUsers = (props) => {
  let history = useHistory();

  const { users } = props;
  const [likeStatus, setLikeStatus] = useState(false);
  console.log("this is : ", users);

  return (
    <>
      <DivImg>
        {users.map((elem, index) => (
          <div
            style={{
              margin: "5em",
              position: "relative",
            }}
          >
            <Blur
              key={`div${index}`}
              like={likeStatus}
              onClick={() => {
                console.log("test", elem?.user_id);
              }}
            >
              <Img status={true} key={`img${index}`} src={elem?.image_path} />
              <Heart display={true} like={likeStatus}>
                <Bubbly
                  onClick={(e) => {
                    likeAnimateButton(e);
                    // setLikeStatus(true);
                  }}
                />
                <img src={heart} style={{ width: "50px", height: "auto" }} />
              </Heart>
            </Blur>
            <CartInfoDiv
              name={elem?.user_name}
              age={elem?.age}
              city={`${elem?.distance?.toFixed(1)}`}
              rating={"8"}
            />
          </div>
        ))}
      </DivImg>
    </>
  );
};
