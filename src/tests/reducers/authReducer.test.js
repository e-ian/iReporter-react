import React from "react";
import authReducer from "../../reducers/authReducer";
import {
  IS_REGISTERING,
  REGISTRATION_ERROR,
  RIGISTRATION_SUCCESS
} from "../../actions/types";

const initialState = {
  success: {},
  error: {},
  isRegistering: false,
  isLoginSuccess: false
};
describe("registration reducer tests", () => {
  it("should return  initial state", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
  it("should handle successful registration", () => {
    const payload = {
      email: "ianemma70@gmail.com",
      username: "ianemma",
      password: "075755@My@boc"
    };
    const successAction = {
      type: RIGISTRATION_SUCCESS,
      payload: payload
    };
    const newState = authReducer(initialState, successAction);
    expect(newState).toEqual({
      ...initialState,
      success: payload,
      isLoginSuccess: true
    });
  });
  it("should handle registration error ", () => {
    let payload = {
      success: {},
      error: "username already exist",
      isRegistering: false,
      isLoginSuccess: false
    };
    const errorMessage = {
      type: REGISTRATION_ERROR,
      payload: payload
    };
    const newState = authReducer(initialState, errorMessage);
    expect(newState).toEqual({
      ...initialState,
      error: payload
    });
  });
  it("should handle IS_REGISTERING ", () => {
    const isRegistering = {
      type: IS_REGISTERING
    };
    const newState = authReducer(initialState, isRegistering);
    expect(newState).toEqual({ ...initialState, isRegistering: true });
  });
});
