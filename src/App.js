// import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Components/styles/globalStyle";

import { Login } from "./Components/pages/login/index.js";
import { ForgotPassword } from "./Components/pages/login/forgotPassword";
import { Signup } from "./Components/pages/signup/index.js";
import { Home } from "./Components/pages/home/index.js";
import { UserProfile } from "./Components/pages/userProfile/index.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        {/* <header className="App-header"></header> */}
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/change-password">
              <ForgotPassword />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <UserProfile />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
