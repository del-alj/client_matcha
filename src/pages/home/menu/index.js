import React, { useContext } from "react";

import { Ul, Li } from "./style";
import { authentication } from "../contexts/usecontext";
import { useParams } from "react-router-dom";
import { blockuser, unblockuser, reportuser } from "../../api/reportAndblock";

export const Menu = (props) => {
  const { auth } = useContext(authentication);
  const { menuList, setDisplay } = props;
  const {id} = useParams();
  return (
    <Ul>
      {menuList.map((elem, index) => (
        <Li
          key={`li${index}`}
          onClick={(e) => {
            // {elem?.function}
            if (elem?.title === "Block") {
              console.log("im block")
              blockuser(id, auth?.userId);
              setDisplay(false);
            } else if (elem?.title === "Unblock") {
              console.log("im unblock")
              unblockuser(id, auth?.userId);
              setDisplay(false);
            } else if (elem?.title === "Report") {
              reportuser(id, auth?.userId);
              setDisplay(false);
            }
          }}
        >
          <a key={`a${index}`}>{elem?.title}</a>
        </Li>
      ))}
    </Ul>
  );
};
