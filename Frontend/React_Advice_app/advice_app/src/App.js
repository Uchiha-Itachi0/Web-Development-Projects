import React from "react";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import CardGenerator from "./Container/CardGenerator/CardGenerator";

function App() {
  return (
    <>
      <GlobalStyle lowerBackgroundColor="#F38E34" HigherBackgroundColor="#FFF" />
        <CardGenerator />
    </>

  );
}

export default App;
