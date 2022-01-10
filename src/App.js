import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "./Components/styles/Container.styles";

import { Login } from "./Components/pages/login";
import { Signup } from "./Components/pages/signup/index.js";
import { Home } from "./Components/pages/home/index.js";
import { UserProfile } from "./Components/pages/userProfile/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {/* <p>test</p> */}
          <BrowserRouter>
            <Switch>
              <Route path="/login">
                <Login />
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
        </Container>
      </header>
    </div>
  );
}

export default App;
