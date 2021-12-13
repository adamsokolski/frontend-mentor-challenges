import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.mainBg};
  
  } 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  primary1: "hsl(215, 51%, 70%)",
  primary2: "hsl(178, 100%, 50%)",
  primary2Hover: "hsla(178, 100%, 50%, 0.6)",
  mainBg: "hsl(217, 54%, 11%)",
  cardBg: "hsl(216, 50%, 16%)",
  line: "hsl(215, 32%, 27%)",
  white: "hsl(0, 0%, 100%)",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
