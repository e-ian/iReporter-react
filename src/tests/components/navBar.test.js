import { shallow } from "enzyme";
import React from "react";
import NavbarComponent from "../../components/navBarComponent";

describe("create intervention component success tests", () => {
  const props = {
    onclick: jest.fn(),
    logout: jest.fn(),
    history: {push:jest.fn()}
  };
  let wrapper;
  let instance;

  it("should render without crashing", () => {
    const wrapper = shallow(<NavbarComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle onclick event", () => {
    const wrapper = shallow(<NavbarComponent {...props} />);
    instance = wrapper.instance();
    instance.logout();
    expect(props.logout).toBeCalledTimes(0);
  });
});
