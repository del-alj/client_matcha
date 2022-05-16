import React from "react";
import GlobalStyle from "./Components/styles/globalStyle";
import { AppDiv } from "./Components/styles/style";
import { Routes } from "./routes/routes";

import ContextProvider from "./Components/contexts/usecontext";
import ContextUser from "./Components/contexts/usercontext";
import ContextImage from "./Components/contexts/imageContext";
import ContextTags from "./Components/contexts/tagsContext";
import ContextConversation from "./Components/contexts/currentConversation";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <ContextProvider>
          <ContextUser>
            <ContextImage>
              <ContextTags>
              <ContextConversation>
                <Routes />
              </ContextConversation>
              </ContextTags>
            </ContextImage>
          </ContextUser>
        </ContextProvider>
      </AppDiv>
    </>
  );
}

export default App;
