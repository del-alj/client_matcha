import React from "react";
import GlobalStyle from "./Components/styles/globalStyle";
import { AppDiv } from "./Components/styles/style";
import { Routes } from "./routes/routes";
import { Layout } from "./layouts/signinLayout";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <Layout>
          <Routes />
        </Layout>
      </AppDiv>
    </>
  );
}

export default App;
