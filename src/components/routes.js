import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import Home from "./home";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
      </BrowserRouter>
    );
  }
}

export default Routes;
