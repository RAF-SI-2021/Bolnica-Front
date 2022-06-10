import {
  GET_LAB_REPORTS,
  CREATE_LAB_REPORT,
  DELETE_LAB_REPORT,
  UPDATE_LAB_REPORT,
} from "../actionTypes";
import * as api from "../../api/index.js";

export const getLabReports = (lbz) => async (dispatch) => {
  try {
    const { data } = await api.fetchLabReports({ lbz });
    dispatch({ type: GET_LAB_REPORTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const getLabReport = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchLabReport({ id });
    dispatch({ type: GET_LAB_REPORTS, data });
  } catch (error) {
    console.log(error);
  }
};
export const searchLabReports = (searchInfo) => async (dispatch) => {
  try {
    const { data } = await api.searchLabReports({ searchInfo });
    dispatch({ type: GET_LAB_REPORTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const createLabReport = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createLabReport(formData);
    dispatch({ type: CREATE_LAB_REPORT, data });
  } catch (error) {
    console.log(error);
  }
};

export const updateLabReport = (labReportData) => async (dispatch) => {
  try {
    const { data } = await api.updateLabReport(labReportData);
    dispatch({
      type: UPDATE_LAB_REPORT,
      id: data.zakazaniPregledId,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLabReport = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteLabReport(formData);
    dispatch({ type: DELETE_LAB_REPORT, data });
  } catch (error) {
    console.log(error);
  }
};
