import { combineReducers } from "redux";

import demo from "./demo";
import employees from "./employee";
import patients from "./patient";

export const reducers = combineReducers({
  demo,
  employees,
  patients,
});
