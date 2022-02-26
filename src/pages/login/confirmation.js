import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { Banner } from "../../Components/banner/index.js";
import { UserProfile } from "../userProfile/index";
// import { confirm } from "../../api/confirmationApi.js";
import useReqHook from '../../hooks/useReqHook';

const Confirmation = () => {
  // const [status, setStatus] = useState(false);
  let { token } = useParams();
  console.log("test000000000");

  // useEffect(async () => {
  //   const temp = await confirm(token);
  //   //tkonecta direct
  //   console.log(temp);
  //   if (temp?.status === 200) {
  //     setStatus(true);
  //   }
  // }, []);
  const { data, isPending, Error } = useReqHook(`confirm/${token}`, "put");
  console.log("test", data, isPending, Error);
  return data ? (
    <UserProfile />
  ) : (
    <Layout>
      <Banner
        title="Error"
        text="you don't have access !"
        // url="https://mail.google.com/mail/"
      />
    </Layout>
  );
};
export { Confirmation };
