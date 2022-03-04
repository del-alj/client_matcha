import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { publicRoutes } from "./routesList.js";
import { autontication } from "../Components/contexts/usecontext";

const PublicRoute = () => {
  const { auth } = useContext(autontication);

  return (
    <>
      {publicRoutes.map(({ path, restricted, component: Component }, index) => (
        <Route path={path} key={index} exact>
          {auth.token && restricted ? (
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
