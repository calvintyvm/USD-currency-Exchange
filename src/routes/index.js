import React from "react";
import { Route, Switch } from "react-router-dom";
import ExchangeUsd from "../Components/Exchange";
import ExchangeCrypto from "../Components/ExchangeCrypto";
import Contact from "../Components/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ExchangeUsd} />
      <Route exact path="/crypto" component={ExchangeCrypto} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
