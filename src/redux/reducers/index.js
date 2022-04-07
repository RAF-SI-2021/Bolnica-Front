import { combineReducers } from "redux";

import demo from "./demo";
import doctors from "./doctors";

export const reducers = combineReducers({
	demo,
	doctors,
});