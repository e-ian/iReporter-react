import { shallow } from "enzyme";
import React from "react";
import Login from "../../components/LoginComponent";

describe("login component success tests", () => {
  const props = {
    onSubmit: jest.fn(),
    passwordError: "",
    errors: null,
    generalError: "",
    onPassword: jest.fn(),
    handleChange: jest.fn()
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("login component fail tests", () => {
  const props = {
    onSubmit: jest.fn(),
    usernameError: "error",
    passwordError: "error",
    errors: {},
    generalError: "error"
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
