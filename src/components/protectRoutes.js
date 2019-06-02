import React from "react";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";

export const Authenticate = token => {
  try {
    const res = decode(token);
    if (res.exp > Date.now() / 1000) {
      return { res };
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const SecureRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = Authenticate(sessionStorage.getItem("access_token"));
  return (
    <Route
      {...props}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export const SecureLogin = ({ component: Component, ...props }) => {
  const isLoggedIn = Authenticate(sessionStorage.getItem("access_token"));
  return (
    <Route
      {...props}
      render={props =>
        isLoggedIn ? <Redirect to="/create" /> : <Component {...props} />
      }
    />
  );
};
