import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Exchange from "./Components/Exchange/Exchange";
import Title from "./Components/Title/Title";
import { injectGlobal } from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Exchange />
      </div>
    );
  }
}

export default App;

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
body{
  font-family: Montserrat;
}
`;
