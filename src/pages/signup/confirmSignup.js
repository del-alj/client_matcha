import React from "react";
import { Layout } from "../../layouts/signinLayout";
import { Banner } from "../../Components/banner/index.js";
// import {title, text, url}from "./BannerConfirmation.js"
// import axios from "axios";

const ConfirmSignup = () => {
  //   const url = "http://localhost:7000/confirmSignup";
  return (
    <Layout>
      <Banner
        title="Confirmation"
        text="for complete your registration please check your mail"
        url="https://mail.google.com/mail/"
      />
    </Layout>
  );
};
//background="red"
export { ConfirmSignup };
