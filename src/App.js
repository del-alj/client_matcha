import React from "react";
import GlobalStyle from "./Components/styles/globalStyle";
import { AppDiv } from "./Components/styles/style";
import { Routes } from "./routes/routes";

import ContextProvider from "./Components/contexts/usecontext";
import ContextUser from "./Components/contexts/usercontext";
import ContextImage from "./Components/contexts/imageContext";
import ContextTags from "./Components/contexts/tagsContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <ContextProvider>
          <ContextUser>
            <ContextImage>
              <ContextTags>
                <Routes />
              </ContextTags>
            </ContextImage>
          </ContextUser>
        </ContextProvider>
      </AppDiv>
    </>
  );
}

export default App;
