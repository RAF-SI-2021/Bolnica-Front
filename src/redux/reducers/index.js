import { combineReducers } from "redux";

import demo from "./demo";
import appointments from "./appointments";
import employees from "./employee";
import records from "./records";
import diseases from "./diseases";
import examinations from "./examinations";
import departments from "./departments";
import patients from "./patients";
import referrals from "./referrals";
import loggedUser from "./auth";

export const reducers = combineReducers({
  demo,
  employees,
  patients,
  appointments,
  records,
  loggedUser,
  departments,
  diseases,
  examinations,
  referrals,
});
