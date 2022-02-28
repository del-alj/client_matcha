import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { privateRoutes } from "./routesList.js";
import { autontication } from "../Components/contexts/usecontext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useContext(autontication);
  const isAuthenticated = token;
  return (
    <>
      {privateRoutes.map(({ path, component: Component }, index) => (
        <Route path={path} key={index} exact>
          {isAuthenticated ? <Component /> : <Redirect to="/login" />}
        </Route>
      ))}
    </>
  );
};

export default PrivateRoute;
