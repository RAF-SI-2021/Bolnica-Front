import * as api from "../../api/index.js";
import { GET_PATIENTS_HISTORY } from "../actionTypes.js";

export const getPatientsHistory =
  (dateFrom, dateTo, lbp) => async (dispatch) => {
    try {
      const { data } = await api.fetchPatientsHistory(dateFrom, dateTo, lbp);
      dispatch({ type: GET_PATIENTS_HISTORY, data });
    } catch (error) {
      console.log(error);
    }
  };
