import React, { Component } from "react";
import { Provider } from "react-redux";
import Routes from "../components/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "../styles/app.scss";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <Routes />
      </Provider>
    );
  }
}

export default App;
