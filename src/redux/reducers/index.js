import { combineReducers } from "redux";

import demo from "./demo";
import appointments from "./appointments";
import employees from "./employee";
import records from "./records";
import diseases from "./diseases";
import examinations from "./examinations";
import labReports from "./labReports";
import departments from "./departments";
import patients from "./patients";
import referrals from "./referrals";
import loggedUser from "./auth";
import visits from "./visits";
import numberOfAppointments from "./numberOfAppointments";
import patientsAdmissions from "./patientsAdmissions";
import hospitalRooms from "./hospitalRooms";

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
  labReports,
  visits,
  numberOfAppointments,
  patientsAdmissions,
  hospitalRooms,
});
