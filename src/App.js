import React from "react";
import GlobalStyle from "./Components/styles/globalStyle";
import { AppDiv } from "./Components/styles/style";
import { Routes } from "./routes/routes";


function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <Routes />
      </AppDiv>
    </>
  );
}

export default App;
