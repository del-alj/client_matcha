import React from "react";
import GlobalStyle from "./Components/styles/globalStyle";
import { AppDiv } from "./Components/styles/style";
import { Routes } from "./routes/routes";

import ContextProvider from "./Components/contexts/usecontext";
import ContextUser from "./Components/contexts/usercontext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <ContextProvider>
          <ContextUser>
            <Routes />
          </ContextUser>
        </ContextProvider>
      </AppDiv>
    </>
  );
}

export default App;
