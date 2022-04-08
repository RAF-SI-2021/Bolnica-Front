import { GET_EMPLOYEES, SEARCH_EMPLOYEES } from "../actionTypes";
import * as api from "../../api/index.js";

export const getEmployees = () => async (dispatch) => {
	try {
		// const { data } = await api.fetchEmployees();
		// dispatch({ type: GET_EMPLOYEES, data });
	} catch (error) {
		console.log(error);
	}
};

export const searchEmployees = (searchValue) => async (dispatch) => {
	try {
		// const { data } = await api.searchEmployees(searchValue);
		// dispatch({ type: GET_EMPLOYEES, data });
	} catch (error) {
		console.log(error);
	}
};
