import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { ForgotPassword } from "../pages/login/forgotPassword";

import { UserProfile } from "../pages/userProfile";
import { EditProfile } from "../pages/editProfile";

import { Home } from "../pages/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <PrivateRoute />
          <PublicRoute />
        </>
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
