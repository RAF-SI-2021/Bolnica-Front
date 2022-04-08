import { GET_APPOINTMENTS, CREATE_APPOINTMENT_NURSE } from "../actionTypes";
import * as api from "../../api/index.js";

export const getAppointments = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchAppointments(id);
        dispatch({ type: GET_APPOINTMENTS, data });
    } catch (error) {
        console.log(error);
    }
};

export const createAppointmentNurse = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.createAppointmentNurse(formData);
        dispatch({ type: CREATE_APPOINTMENT_NURSE, data });
    } catch (error) {
        console.log(error);
    }
};