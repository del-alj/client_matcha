import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { privateRoutes } from "./routesList.js";
import { authentication } from "../Components/contexts/usecontext";
import { UserContext } from "../Components/contexts/usercontext";
import { EditProfile } from "../pages/editProfile/index";

const PrivateRoute = () => {
  const { auth } = useContext(authentication);
  const [userDetails] = useContext(UserContext);
  console.log("----------------> ", auth?.profile_status, userDetails?.profile_status);
  return (
    <>
      {privateRoutes.map(({ component: Component, path }, index) => (
        <Route path={path} key={index} exact>
          {auth?.token ? (
            auth?.reported === false ? (
              // userDetails?.profile_status === true ? (
                <Component />
              // ) : (
                // <>
                //   <Redirect to="/profile/edit" />
                //   <EditProfile />
                // </>
              // )
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
