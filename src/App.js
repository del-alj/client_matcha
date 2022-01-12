// import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Components/styles/globalStyle";

import { Login } from "./Components/pages/login/index.js";
import { ForgotPassword } from "./Components/pages/login/forgotPassword";
import { Signup } from "./Components/pages/signup/index.js";
import { Home } from "./Components/pages/home/index.js";
import { UserProfile } from "./Components/pages/userProfile/index.js";
import { Header } from "./Components/styles/Container.styles";
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <a>Matcha</a>
          {/* <a>Matcha</a>
          <a>Matcha</a> */}
        </Header>
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
