import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { injectGlobal } from "styled-components";
import "./App.css";
import Exchange from "./Components/Exchange/Exchange";
import Title from "./Components/Title/Title";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Title />
          <Exchange />
        </div>
      </Provider>
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
