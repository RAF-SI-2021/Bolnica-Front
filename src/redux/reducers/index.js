import { combineReducers } from "redux";

import demo from "./demo";
import employees from "./employee";

export const reducers = combineReducers({
  demo,
  employees,
});
