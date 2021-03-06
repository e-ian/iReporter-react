import {
  IS_REGISTERING,
  REGISTRATION_ERROR,
  RIGISTRATION_SUCCESS
} from "../actions/types";

const initialState = {
  success: {},
  error: {},
  isRegistering: false,
  isLoginSuccess: false
};
export default function(state = initialState, actions) {
  switch (actions.type) {
    case RIGISTRATION_SUCCESS:
      return {
        ...state,
        success: actions.payload,

        isRegistering: false,
        isLoginSuccess: true
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        error: actions.payload,

        isRegistering: false,
        isLoginSuccess: false
      };
    case IS_REGISTERING:
      return {
        ...state,
        isRegistering: true
      };
    default:
      return state;
  }
}
