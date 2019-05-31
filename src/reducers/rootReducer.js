import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import interventionReducer from "./interventionReducer";

export default combineReducers({
  auth_login: loginReducer,
  auth: authReducer,
  incident: interventionReducer
});
