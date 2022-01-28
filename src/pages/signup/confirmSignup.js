import React from "react";
import { Layout } from "../../layouts/signinLayout";
import { Banner } from "../../Components/banner/index.js";

const ConfirmSignup = () => {
  return (
    <Layout>
      <Banner
        title="Confirmation"
        text="for complete your registration please check your mail"
        // url="https://mail.google.com/mail/"
      />
    </Layout>
  );
};
export { ConfirmSignup };
