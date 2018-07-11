import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Exchange from "./Components/Exchange/Exchange";
import Title from "./Components/Title/Title";

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
