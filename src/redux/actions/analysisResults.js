import { GET_ANALYSIS_RESULTS } from "../actionTypes";
import * as api from "../../api/index.js";

export const getAnalysisResults = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAnalysisResults(id);
    dispatch({ type: GET_ANALYSIS_RESULTS, data });
  } catch (error) {
    console.log(error);
  }
};
