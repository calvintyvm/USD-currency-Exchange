import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { injectGlobal } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Exchange from "./Components/Exchange/";
import Title from "./Components/Title/Title";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Title />
            <Routes />
            <Footer />
          </div>
        </Router>
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
