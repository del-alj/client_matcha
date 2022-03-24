import React, { useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { Banner } from "../../Components/banner/index.js";
import { EditProfile } from "../editProfile/index";
import { authentication } from "../../Components/contexts/usecontext";
import { getUserConfirm } from "./tools";
// import useReqHook from "../../hooks/useReqHook";

const Confirmation = () => {
  let { token } = useParams();
  const { auth, setAuth } = useContext(authentication);
  const url = `${process.env.REACT_APP_BASE_URL}/confirm/${token}`;

  // const { data, isPending, Error } = useReqHook(`confirm/${token}`, "put");
  useEffect(() => {
    getUserConfirm(url, setAuth);
  }, []);

  return auth?.userId ? (
    <EditProfile />
  ) : (
    <Layout>
      <Banner title="Error" text="you don't have access !" />
    </Layout>
  );
};
export { Confirmation };
