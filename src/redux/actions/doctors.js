import { GET_DOCTORS } from "../actionTypes";
import * as api from "../../api/index.js";

export const getDoctors = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDoctors();
        dispatch({ type: GET_DOCTORS, data });
    } catch (error) {
        console.log(error);
    }
};