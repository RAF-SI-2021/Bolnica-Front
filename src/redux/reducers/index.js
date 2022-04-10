import { combineReducers } from "redux";

import demo from "./demo";
import appointments from "./appointment";
import employees from "./employee";
import records from "./records";

export const reducers = combineReducers({
  demo,
  employees,
  appointments,
  records,
});
