import { combineReducers } from "redux";

import demo from "./demo";
<<<<<<< HEAD
import doctors from "./doctors";
import appointments from "./appointments";

export const reducers = combineReducers({
	demo,
	doctors,
	appointments
});
=======
import appointments from "./appointment";
import employees from "./employee";
import patients from "./patient";

export const reducers = combineReducers({
  demo,
  employees,
  patients,
  appointments,
});
>>>>>>> main
