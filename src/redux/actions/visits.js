import { GET_LAB_VISITS, UPDATE_LAB_VISITS } from "../actionTypes";
import * as api from "../../api/index.js";

export const searchLabVisits = (lbp, dateValue) => async (dispatch) => {
  try {
    const { data } = await api.searchLabVisits(lbp, dateValue);
    dispatch({ type: GET_LAB_VISITS, data });
  } catch (error) {
    console.log(error);
  }
};

export const updateLabVisits = (id, status) => async (dispatch) => {
  try {
    const { data } = await api.updateLabVisits(id, status);
    dispatch({ type: UPDATE_LAB_VISITS, data });
  } catch (error) {
    console.log(error);
  }
};
