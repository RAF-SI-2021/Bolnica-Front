import { combineReducers } from "redux";

import demo from "./demo";
import appointments from "./appointment";
import employees from "./employee";

export const reducers = combineReducers({
  demo,
  employees,
  appointments,
});
