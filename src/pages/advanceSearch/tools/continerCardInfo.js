import React, { useState, useContext } from "react";

import { Img, Blur, Heart, Bubbly } from "../style";
import { CartInfoDiv } from "./cardInfo";
import heart from "../../../assets/icons/heart.png";
import { likeThisUser } from "../../../api/likes";
import { authentication } from "../../../Components/contexts/usecontext";
import { calRating } from "../../../tools/calculeRating";
import { UserContext } from "../../../Components/contexts/usercontext";

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

export const ContinerCardInfo = (props) => {
  const [setUserDetails] = useContext(UserContext);
  const { auth } = useContext(authentication);

  const { user, index } = props;
  const [likeStatus, setLikeStatus] = useState(false);
  return (
          <div
            key={`bigDiv${index}`}
            style={{
              margin: "5em",
              position: "relative",
              display: likeStatus ? "none" : "block"
            }}
          >
            <Blur
              key={`div${index}`}
              like={likeStatus}
              onClick={() => {
                console.log("test", user?.user_id);
              }}
            >
              <Img status={true} key={`img${index}`} src={user?.image_path} />
              <Heart key={`heart${index}`} like={likeStatus}>
                <Bubbly
                  key={`Bubbly${index}`}
                  onClick={(e) => {
                    likeAnimateButton(e);
                    likeThisUser({
                      user_id: parseInt(auth?.userId),
                      suggestion_user_id: user?.user_id,
                    });
                    setLikeStatus(true);
                    const content = {
                      userName: auth?.userName || "someone",
                      type: "like",
                      status: true,
                      from: auth?.userId,
                      to: user?.user_id || null,
                    };
                    auth?.socket?.emit("notification", {
                      content,
                      to: user?.user_id,
                    });
                  }}
                />
                <img
                  key={`imgh${index}`}
                  src={heart}
                  style={{ width: "50px", height: "auto" }}
                />
              </Heart>
            </Blur>
            <CartInfoDiv
              key={`CartInfoDiv${index}`}
              name={user?.user_name}
              age={user?.age}
              city={`${user?.distance?.toFixed(1)}`}
              rating={calRating({
                vue: user?.vues_list,
                like: user?.likes_list,
              })}
              id={user?.user_id}
            />
          </div>
      
  );
};
