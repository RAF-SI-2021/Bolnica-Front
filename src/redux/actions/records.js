import { GET_RECORD } from "../actionTypes";
import * as api from "../../api/index.js";

export const getRecord = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchRecord(id);
    dispatch({ type: GET_RECORD, data: [data] });
  } catch (error) {
    console.log(error);
  }
};
