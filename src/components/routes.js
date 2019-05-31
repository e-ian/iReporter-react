import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/registerContainer";
import interventionContainer from "../containers/InterventionContainer";
import Home from "./home";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/interventions" component={interventionContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
