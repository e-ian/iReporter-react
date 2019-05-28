import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import "@babel/polyfill";

import data from "../../tests/mock_data/moxios_mock";
import { userLoginRequest } from "../../actions/LoginAction";
import { SUCCESSFUL, LOGIN_STARTED } from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Login Action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });
  it("should login a user successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.login.success
      });
    });
    const expectedAction = [
      { type: "LOGIN_STARTED" },
      { type: "SUCCESSFUL", payload: undefined }
    ];
    const validData = {
      username: "ianemma",
      password: "@bochiSupreme1"
    };

    return store
      .dispatch(userLoginRequest(validData, { history: [] }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
  it("returns error message on user login failure", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 400,
        response: data.failure
      });
    });
    const expectedAction = [{ type: "LOGIN_STARTED" }, { type: "LOGIN_FAIL" }];
    const invalidData = {
      username: "",
      password: ""
    };
    return store.dispatch(userLoginRequest(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
