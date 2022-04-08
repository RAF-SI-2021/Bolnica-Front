import { GET_APPOINTMENTS, UPDATE_APPOINTMENT } from "../actionTypes";
import * as api from "../../api/index.js";

export const getAppointments = () => async (dispatch) => {
	try {
		// const { data } = await api.fetchAppointments();
		// dispatch({ type: GET_APPOINTMENTS, data });
	} catch (error) {
		console.log(error);
	}
};

export const updateAppointment = (id, appointment) => async (dispatch) => {
	try {
		console.log(id);
		console.log(appointment);
		/*     console.log(navigate);
		 */
		// const { data } = await api.updateAppointment(id, appointment);
		// dispatch({ type: UPDATE_APPOINTMENT, id, data });
		/*       navigate("/appointment");
		 */
	} catch (error) {
		console.log(error);
	}
};
