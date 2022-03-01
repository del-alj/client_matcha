import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import { Login } from "../pages/login";
import { UserProfile } from "../pages/userProfile";
import { Home } from "../pages/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <PublicRoute restricted={false} component={Home} path="/" exact /> */}
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PrivateRoute component={UserProfile} path="/profile" exact />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
