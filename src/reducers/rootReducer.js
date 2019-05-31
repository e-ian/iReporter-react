import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import interventionReducer from "./interventionReducer";
import createInterventionReducers from "./createInterventionReducers";

export default combineReducers({
  auth_login: loginReducer,
  auth: authReducer,
  incident: interventionReducer,
  create: createInterventionReducers
});
