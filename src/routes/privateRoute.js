import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { privateRoutes } from "./routesList.js";
import { autontication } from "../Components/contexts/usecontext";

const PrivateRoute = () => {
  const { auth } = useContext(autontication);

  return (
    <>
      {privateRoutes.map(({ component: Component, path }, index) => (
        <Route path={path} key={index} exact>
          {auth.token ? <Component /> : <Redirect to="/login" />}
        </Route>
      ))}
    </>
  );
};

export default PrivateRoute;
