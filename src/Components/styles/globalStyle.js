import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    box-sizing: border-box;
    font-family: "Electrolize", sans-serif;
  }
  * {
   box-sizing: border-box;
  }
`;
export default GlobalStyle;
