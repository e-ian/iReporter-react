import { IS_FETCHING, FETCHED, FETCH_FAILED } from "../actions/types";

const initialState = {
  isLoading: false,
  interventions_list: [],
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED:
      return {
        ...state,
        interventions_list: action.payload,
        isLoading: false
      };
    case FETCH_FAILED:
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      };
    case IS_FETCHING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
