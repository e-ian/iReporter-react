import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  mapStateToProps,
  RegisterContainer
} from "../../containers/registerContainer";
import { shallow } from "enzyme";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let instance;
let wrapper;
const props = {
  handleOnSubmit: jest.fn(),
  registerUser: jest.fn(),
  username: "",
  firstname: "",
  lastname: "",
  role: "",
  password: "",
  email: "",
  error: {
    username: "",
    password: "",
    email: ""
  },
  history: { push: jest.fn() }
};
const nextProps = {
  isLoginSuccess: true
};
describe("registerContainer", () => {
  beforeEach(() => {
    wrapper = shallow(<RegisterContainer {...props} />);
    instance = wrapper.instance();
  });
  it("should  render register container without crushing ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle on submit event", () => {
    const e = {
      preventDefault: jest.fn(),
      errors: {
        username: "",
        password: "",
        email: ""
      }
    };
    instance.handleOnSubmit(e);
    expect(props.registerUser).toBeCalled();
  });
  it("should handle on submit fail", () => {
    const event = {
      preventDefault: jest.fn()
    };
    instance.setState({ errors: { username: "test error" } });
    const registererror = instance.handleOnSubmit(event);
    expect(registererror).toBe(false);
  });
  it("should handle short password cases", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "username",
        value: "anya"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.username).toBe("");
  });
  it("should handle email address errors", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "email",
        value: "ianemma@baa"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.email).toBe(" Invalid email");
  });
  it("should handle on change password errors", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "password",
        value: "ogwakj.va"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.password).toBe(
      "Password must have least a number, lowercase char, special char and min of 8 chars"
    );
  });
  it("should handle on change right password", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "password",
        value: "075755@My"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.password).toBe("");
  });
  it("should handle on change right username", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "username",
        value: "ianemma"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.username).toBe("");
  });
  it("should handle on change right firstname", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "firstname",
        value: "emmanuel"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.firstname).toBe("");
  });
  it("should handle on change right lastname", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "lastname",
        value: "ogwal"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.lastname).toBe("");
  });
  it("should handle on change right role", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "role",
        value: "admin"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.role).toBe("");
  });
  it("should handle on change right password", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "email",
        value: "ianemma70@gmail.com"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.username).toBe("");
  });
  it("should handle on change default", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "test",
        value: "ianemma67@gmail.com"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.username).toBe("");
  });
  it("should check map states to props", () => {
    const state = {
      auth: { isRegistering: false }
    };
    expect(mapStateToProps(state)).toEqual({ isRegistering: false });
  });
  it("should redirect on successfully registration", () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith("/login");
  });
  it("should redirect on successfully registration", () => {
    wrapper.setProps({ ...nextProps, isLoginSuccess: false });
    expect(props.history.push).toHaveBeenCalledTimes(0);
  });
});
