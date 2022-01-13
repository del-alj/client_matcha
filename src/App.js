// import "./App.css";
import React from "react";
import GlobalStyle from "./Components/styles/globalStyle";
import { AppDiv } from "./Components/styles/style";

import { HomeHeader } from "./Components/header/header";
import { HomeFooter } from "./Components/footer/footer";
import { Routes } from "./routes/routes";
function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <HomeHeader />
        <Routes />
        <HomeFooter />
      </AppDiv>
    </>
  );
}

export default App;
