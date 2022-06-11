import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { privateRoutes } from "./routesList.js";
import { authentication } from "../Components/contexts/usecontext";
import { EditProfile } from "../pages/editProfile/index";
const PrivateRoute = () => {
  const { auth } = useContext(authentication);
  return (
    <>
      {privateRoutes.map(({ component: Component, path }, index) => (
        <Route path={path} key={index} exact>
          {auth?.token ? (
            auth?.reported === false ? (
              auth?.profile_status === true ? (
                <Component />
              ) : (
                <>
                  <Redirect to="/profile/edit" />
                  <EditProfile />
                </>
              )
            ) : (
              <Redirect to="/error" />
            )
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      ))}
    </>
  );
};

export default PrivateRoute;
