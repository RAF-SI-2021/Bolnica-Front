
import * as api from "../../api/index.js";

export const getEmployee = (formData,navigate) => async (dispatch) => {
	try {
		const { data } = await api.fetchEmployee(formData);
        navigate("/");
		dispatch({ type:"", data });
	} catch (error) {
		console.log(error);
	}
};

export const createEmployee = (formData,navigate) => async (dispatch) => {
	try {
		const { data } = await api.fetchEmployee(formData);
        navigate("/");
		dispatch({ type:"", data });
	} catch (error) {
		console.log(error);
	}
};