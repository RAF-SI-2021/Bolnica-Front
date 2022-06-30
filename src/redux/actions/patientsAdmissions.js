import {
  GET_PATIENTS_ADMISSIONS,
  UPDATE_PATIENT_ADMISSION,
  CREATE_PATIENT_ADMISSION,
} from "../actionTypes";
import * as api from "../../api/index.js";

export const searchPatientsAdmissions =
  (lbp, dateValue) => async (dispatch) => {
    try {
      const { data } = await api.searchPatientsAdmissions(lbp, dateValue);
      dispatch({ type: GET_PATIENTS_ADMISSIONS, data });
    } catch (error) {
      console.log(error);
    }
  };

export const updatePatientAdmission = (id, status) => async (dispatch) => {
  try {
    const { data } = await api.updatePatientAdmission(id, status);
    dispatch({ type: UPDATE_PATIENT_ADMISSION, data });
  } catch (error) {
    console.log(error);
  }
};

export const createPatientAdmission = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.createPatientAdmission(formData);
    console.log(data);
    dispatch({ type: CREATE_PATIENT_ADMISSION, data });
  } catch (error) {
    console.log(error);
  }
};
