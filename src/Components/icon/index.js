import React, { useState, useContext, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Button, Img, RedPoint } from "./style.js";
import { authentication } from "../contexts/usecontext";
import { Menu } from "../headers/tools/menu";
import { UserContext } from "../../Components/contexts/usercontext";

import { likeThisUser, unLikeThisUser } from "../../api/likes";
const Icon = (props) => {
  const { history } = props;
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Button
        onClick={(e) => {
          setDisplay(!display);
        }}
      >
        <Img src={props.img} alt={props.alt} type={props.type} />
      </Button>
      {display && props?.listMenu && <Menu menuList={props?.listMenu} />}
    </>
  );
};

const IconNotification = (props) => {
  const { history } = props;
  const [notifications, setNotifications] = useState([]); // hdi li khess zkon fiha lista
  const [notificationState, setNotificationState] = useState({
    history: props?.history,
    status: false,
  });
  const { auth } = useContext(authentication);

  const privateNotification = (data) => {
    setNotifications((data) => {
      const newNotifications = [...notifications];
      if (data) {
        const temp = {
          ...data,
          title: `${data?.name || data?.from}`,
          text: `${data?.status ? "Like" : "Unlike"} you`,
          status: false,
          path: "",
        };
        newNotifications?.push(temp);
      }
      console.log("xhal m mara");

      return newNotifications;
    });
  };

  useEffect(() => {
    //ma3raftx xni dirt
    auth.socket?.on(`${props?.type}`, (data) => {
      setNotificationState({ ...notificationState, status: true });
      privateNotification(data);
    });
  }, []);

  return (
    <>
      <RedPoint display={notificationState?.status} />
      <Button
        onClick={(e) => {
          if (props?.alt === "Messages") history.push("/messages");
          else if (props?.alt === "Notifications")
            history.push("/notifications");
        }}
      >
        <Img src={props.img} alt={props.alt} type={props.type} />
      </Button>
    </>
  );
};

const LikeIcon = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const { id } = useParams();
  const likerList = userDetails?.likesList;
  const { auth } = useContext(authentication);
  const { content } = props;
  const ids = { user_id: auth?.userId, suggestion_user_id: id };
  return (
    <>
      <Button
        onClick={(e) => {
          if (auth?.userId && id && auth?.userId != id) {
            const temp = likerList.includes(parseInt(auth?.userId));
            const NewContent = { ...content, status: !temp };
            auth?.socket?.emit("notification", {
              content: NewContent,
              to: content?.to,
            });
            temp
              ? unLikeThisUser(ids, setUserDetails)
              : likeThisUser(ids, setUserDetails);
          }
        }}
      >
        <Img src={props.img} alt={props.alt} type={props.type} />
      </Button>
    </>
  );
};
export { Icon, LikeIcon, IconNotification };
