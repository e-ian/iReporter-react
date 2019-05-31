import React from "react";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { IS_FETCHING, FETCHED, FETCH_FAILED } from "../../actions/types";
import { getInterventions } from "../../actions/InterventionAction";
const middleware = [thunk];
const mockStore = configureStore(middleware);

describe("get intervention Actions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should test get intervention actions", () => {
    const payload = {
      interventions_list: [
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
    moxios.wait(() => {
      let response = moxios.requests.mostRecent();
      response.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = [
      { type: "IS_FETCHING" },
      { type: "FETCHED", payload: payload.interventions_list }
    ];
    const store = mockStore({});
    return store.dispatch(getInterventions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
