import React from "react";
import { createGlobalStyle } from "styled-components";
import * as C from './Components/index';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Noto Sans CJK KR', sans-serif;
    background-color: #F9FAFB;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <C.Section1_5/>
    </>
  );
};

export default App;