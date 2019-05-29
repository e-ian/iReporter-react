import React from "react";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  IS_REGISTERING,
  REGISTRATION_ERROR,
  RIGISTRATION_SUCCESS
} from "../../actions/types";
import { registerUser } from "../../actions/registerActions";

const middleware = [thunk];
const mockStore = configureStore(middleware);
describe("testing registration actions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should handle handle user registration", () => {
    const mockData = {
      firstname: "emmanuel",
      lastname: "ogwal",
      role: "admin",
      email: "ianemma70@gmail.com",
      username: "ianemma",
      password: "@bochiSupreme2"
    };

    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: mockData
      });
    });
    const expectedActions = [
      { type: IS_REGISTERING },
      { type: RIGISTRATION_SUCCESS, payload: mockData }
    ];

    return store
      .dispatch(
        registerUser({
          email: "ianemma7017@gmail.com",
          firstname: "emmanuel",
          lastname: "Ogwal",
          username: "ianemmag",
          password: "@bochiSupreme1",
          role: "admin"
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should handle user registration error ", () => {
    const mockData = {
      success: {},
      error: "username already exist",
      isRegistering: false,
      isLoginSuccess: false
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: mockData
      });
    });

    const expectedActions = [
      { type: "IS_REGISTERING" },
      {
        type: REGISTRATION_ERROR,
        payload: undefined
      }
    ];

    const store = mockStore({});
    return store
      .dispatch(
        registerUser({
          email: "ianemma7017@gmail.com",
          firstname: "emmanuel",
          lastname: "Ogwal",
          username: "ianemmag",
          password: "@bochiSupreme1",
          role: "admin"
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
