import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { publicRoutes } from "./routesList.js";
import { autontication } from "../Components/contexts/usecontext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const token = useContext(autontication);
  const isAuthenticated = token._currentValue2;
  console.log(token);
  return (
    <>
      {publicRoutes.map(({ path, component: Component }, index) => (
        <Route path={path} key={index} exact>
          {isAuthenticated && restricted ? (
            <Redirect to="/profile" />
          ) : (
            <Component />
          )}
        </Route>
      ))}
    </>
  );
};

export default PublicRoute;
