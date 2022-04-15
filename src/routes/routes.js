import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

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
