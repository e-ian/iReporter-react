import { shallow } from "enzyme";
import React from "react";
import CreateIntervention from "../../components/createInterventionComponent";

describe("create intervention component success tests", () => {
  const props = {
    comment: "ghjgssbbbababbs",
    created_by: "paulo",
    created_on: "Fri, 31 May 2019 19:10:30 GMT",
    image: "image",
    incident_type: "intervention",
    location: "kampala",
    status: "draft"
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<CreateIntervention {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
