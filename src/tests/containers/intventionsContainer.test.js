import React from "react";
import { interventionContainer } from "../../containers/InterventionContainer";
import { shallow } from "enzyme";

const props = {
  getInterventions: jest.fn()
};
let wrapper;
describe("InterventionContainer", () => {
  beforeEach(() => {
    wrapper = shallow(<interventionContainer {...props} />);
  });
  it("description", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
