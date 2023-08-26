import React from "react";
import Gist from "./components/Gist/Gist";
import GlobalStyles from "./GlobalStyle";
import { styled } from "styled-components";

function App() {
  return (
    <Wrapper className="App" data-testid="app">
      <Gist />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;
export default App;
