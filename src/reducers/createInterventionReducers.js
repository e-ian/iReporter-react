import { CREATE_INTERVENTIONS, CREATE_ERROR } from "../actions/types";

const initialState = {
  isRedirecting: false,
  payload: [],
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INTERVENTIONS:
      return {
        ...state,
        payload: action.payload,
        isRedirecting: true
      };
    case CREATE_ERROR:
      return {
        ...state,
        errors: action.payload,
        isRedirecting: false
      };
    default:
      return state;
  }
};
