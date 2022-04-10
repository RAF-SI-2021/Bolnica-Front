import { combineReducers } from "redux";

import demo from "./demo";
import doctors from "./doctors";
import appointments from "./appointments";

export const reducers = combineReducers({
	demo,
	doctors,
	appointments
});