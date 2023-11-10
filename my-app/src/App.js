import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="contanier">
      <div className="header">
        <Header />
      </div>
      <Body />
    </div>
  );
};

export default App;
