import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routes } from "./routesList.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, component: Component }) => (
          <Route path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
