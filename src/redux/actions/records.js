import { CREATE_RECORD, GET_RECORD } from "../actionTypes";
import * as api from "../../api/index.js";

export const getRecord = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchRecord(id);
    dispatch({ type: GET_RECORD, data: [data] });
  } catch (error) {
    console.log(error);
  }
};

export const createRecord = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.createRecord(formData);
    dispatch({ type: CREATE_RECORD, data });
  } catch (error) {
    console.log(error);
  }
};
