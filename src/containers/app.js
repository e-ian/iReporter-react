import React, { Component } from "react";
import { Provider } from "react-redux";

import "../styles/app.css";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>My iReporter App!</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
