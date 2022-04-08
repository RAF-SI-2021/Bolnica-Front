import { CREATE_EXAMINATION } from "../actionTypes";
import * as api from "../../api/index.js";

export const createExamination = (formData) => async (dispatch) => {
	try {
		console.log(formData);
		// const { data } = await api.createExamination(formData);
		// dispatch({ type: CREATE_EXAMINATION, data });
	} catch (error) {
		console.log(error);
	}
};
