import React, { Component } from "react";
import { Provider } from "react-redux";
import Routes from "../components/routes";

import "../styles/app.css";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
