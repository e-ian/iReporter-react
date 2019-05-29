import React from "react";
import { shallow } from "enzyme/build";
import RegisterComponent from "../../components/registerComponent";

describe("register component tests", () => {
  let wrapper;
  let props = {
    firstname: "",
    lastname: "",
    role: "",
    username: "",
    email: "",
    password: "",
    errors: {
      username: "",
      email: "",
      password: ""
    },
    message: {
      errors: {}
    },
    classes: null,
    handleOnChange: jest.fn(),
    handleOnSubmit: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<RegisterComponent {...props} />);
  });
  it("should render with crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle  onchange user input fields ", () => {
    wrapper
      .dive()
      .find("#username")
      .simulate("change");
    expect(props.handleOnChange).toHaveBeenCalledTimes(1);
  });
  it("should simulate onclick event for submit button", () => {
    const onSubmit = wrapper.dive();
    onSubmit.find(".button-success").simulate("submit");
  });
});
