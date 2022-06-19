import {
    CREATE_PATIENT, CREATE_PATIENTS_VISITS,
    GET_PATIENTS_VISITS,
} from "../actionTypes";
import * as api from "../../api/index.js";


export const getPatientsVisits = (formData) => async (dispatch) => {
    try {
        const { data } = await api.fetchPatientsVisits(formData);
        dispatch({ type: GET_PATIENTS_VISITS, data });
    } catch (error) {
        console.log(error);
    }
};
export const createPatientsVisits = (lbp,formData) => async (dispatch) => {
    try {
        const { data } = await api.createPatientVisit(lbp,formData);
        dispatch({ type: CREATE_PATIENTS_VISITS, data });
    } catch (error) {
        console.log(error);
    }
};