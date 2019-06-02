import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/registerContainer";
import interventionContainer from "../containers/InterventionContainer";
import createInterventionContainer from "../containers/createInterventionContainer";
import Home from "./home";
import { SecureLogin, SecureRoute } from "./protectRoutes";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <SecureLogin exact path="/" component={Home} />
          <SecureLogin path="/login" component={LoginContainer} />
          <SecureLogin path="/register" component={RegisterContainer} />
          <SecureRoute
            path="/interventions"
            component={interventionContainer}
          />
          <SecureRoute path="/create" component={createInterventionContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
