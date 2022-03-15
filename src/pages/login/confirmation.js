import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Layout } from "../../layouts/signinLayout";
import { Banner } from "../../Components/banner/index.js";
import { EditProfile } from "../editProfile/index";
import useReqHook from "../../hooks/useReqHook";

const Confirmation = () => {
  let { token } = useParams();

  const { data, isPending, Error } = useReqHook(`confirm/${token}`, "put");
  return data ? (
    <EditProfile data={data} />
  ) : (
    <Layout>
      <Banner title="Error" text="you don't have access !" />
    </Layout>
  );
};
export { Confirmation };
