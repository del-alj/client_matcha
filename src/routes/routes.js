import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import ContextProvider from "../Components/contexts/usecontext";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { UserProfile } from "../pages/userProfile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ContextProvider>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute component={UserProfile} path="/profile" exact />
        </ContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
