import { combineReducers } from "redux";
import activeReducer from "./activeReducer";
import openedReducer from "../reducers/openedReducer";

export default combineReducers({
  active: activeReducer,
  menu: openedReducer,
});
