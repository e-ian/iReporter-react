import { shallow } from "enzyme";
import React from "react";
import InterventionComponent from "../../components/InterventionComponent";

describe("get intervention component success tests", () => {
  const props = {
    interventions: [
      {
        comment: "ghjgssbbbababbs",
        created_by: "paulo",
        created_on: "Fri, 31 May 2019 19:10:30 GMT",
        image: "image",
        incident_type: "intervention",
        intervention_id: 17,
        location: "kampala",
        status: "draft"
      },
      {
        comment: "hbbhhbabdfyvweyufey",
        created_by: "paulo",
        created_on: "Fri, 31 May 2019 19:16:35 GMT",
        image: "image",
        incident_type: "intervention",
        intervention_id: 18,
        location: "kampala",
        status: "draft"
      }
    ]
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<InterventionComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
