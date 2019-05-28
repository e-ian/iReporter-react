import { LOGIN_STARTED, LOGIN_FAIL, SUCCESSFUL } from "../../actions/types";
import loginReducer from "../../reducers/loginReducer";

describe("Tests for login reducer", () => {
  const initialState = {
    isSuccessful: false,
    loginSuccess: false,
    access_token: "",
    errors: null,
    isProcessing: null
  };

  const dispatchedAction = {
    type: SUCCESSFUL,
    payload: {
      access_token: "eyJ0eXAiOiJKV1Q"
    }
  };

  const newState = {
    isSuccessful: true,
    loginSuccess: true,
    access_token: { access_token: "eyJ0eXAiOiJKV1Q" },
    errors: null,
    isProcessing: null
  };

  it("should successfully login", () => {
    expect(loginReducer(initialState, dispatchedAction)).toEqual(newState);
  });
  it("should handle login failure", () => {
    const failAction = {
      type: LOGIN_FAIL,
      payload: {}
    };

    const failState = {
      isProcessing: null,
      isSuccessful: false,
      loginSuccess: false,
      errors: {},
      access_token: ""
    };
    expect(loginReducer(initialState, failAction)).toEqual(failState);
  });
  it("should handle login start", () => {
    const startAction = {
      type: LOGIN_STARTED,
      payload: {}
    };

    const startState = {
      isProcessing: true,
      isSuccessful: false,
      loginSuccess: false,
      errors: null,
      access_token: ""
    };
    expect(loginReducer(initialState, startAction)).toEqual(startState);
  });
  it("should handle initial state", () => {
    const noAction = {
      type: "",
      payload: {}
    };
    expect(loginReducer(initialState, noAction)).toEqual(initialState);
  });
});
