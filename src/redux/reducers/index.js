import { combineReducers } from "redux";

import demo from "./demo";
import appointments from "./appointment";
import employees from "./employee";
import patients from "./patient";

export const reducers = combineReducers({
  demo,
  employees,
  patients,
  appointments,
});
