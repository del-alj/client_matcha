import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { DivImg, Img, Blur, Heart, Bubbly } from "../style";
import { CartInfoDiv } from "./cardInfo";
import heart from "../../../assets/icons/heart.png";
import { likeThisUser } from "../../../api/likes";
import { authentication } from "../../../Components/contexts/usecontext";

const likeAnimateButton = (e) => {
  e.preventDefault(e);
  //reset animation
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  //hna khescondition dyal del likes and disabel
  
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 1000);
};

export const DisplayUsers = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);

  const { users } = props;
  const [likeStatus, setLikeStatus] = useState(false);
  console.log("this is : ", users);

  return (
    <>
      <DivImg>
        {users.map((elem, index) => (
          <div
          key={`bigDiv${index}`} 
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
              <Heart key={`heart${index}`} like={likeStatus}>
                <Bubbly
                key={`Bubbly${index}`}
                  onClick={(e) => {
                    likeAnimateButton(e);
                    likeThisUser({ 
                      user_id: parseInt(auth?.userId),
                      suggestion_user_id: elem?.user_id,});
                    // setLikeStatus(true);
                  }}
                />
                <img  key={`imgh${index}`} src={heart} style={{ width: "50px", height: "auto" }} />
              </Heart>
            </Blur>
            <CartInfoDiv 
            key={`CartInfoDiv${index}`}
              name={elem?.user_name}
              age={elem?.age}
              city={`${elem?.distance?.toFixed(1)}`}
              rating={"8"}
              id={elem?.user_id}
            />
          </div>
        ))}
      </DivImg>
    </>
  );
};
