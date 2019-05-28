import { LOGIN_STARTED, LOGIN_FAIL, SUCCESSFUL } from "../actions/types";

const initialState = {
  isSuccessful: false,
  access_token: "",
  errors: null,
  isProcessing: null,
  loginSuccess: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESSFUL:
      return {
        ...state,
        isSuccessful: true,
        access_token: action.payload,
        isProcessing: null,
        loginSuccess: true
      };

    case LOGIN_STARTED: {
      return {
        ...state,
        isProcessing: true
      };
    }

    case LOGIN_FAIL:
      return {
        ...state,
        errors: action.payload,
        isProcessing: null
      };
    default:
      return state;
  }
};
export default loginReducer;
