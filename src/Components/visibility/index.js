import React, { useEffect, useState, useContext } from "react";

import { Status, Titel, VisibilityDiv } from "./style.js";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { authentication } from "../contexts/usecontext";
import {getDisconnectAt} from "./tools";

const Visibility = (props) => {
  const url = `/visibility`;
  let { id } = useParams();
  const [status, setStatus] = useState("Offline");
  const { auth } = useContext(authentication);

  useEffect(() => {
    //get status
    if (id) {
      auth?.socket?.emit("statusUser", { userId: id });
      auth?.socket?.on("statusUser", (data) => {
        console.log("this is status1", data);
        if (data) setStatus("online");
        else {
          getDisconnectAt(`${url}/${id}`, setStatus);
          console.log("this value disconect ", status)
        }
      });
    }
  }, [auth, id]);

  return (
    <VisibilityDiv>
      <Status state={status} />
      <Titel>{status}</Titel>
    </VisibilityDiv>
  );
};

export { Visibility };
