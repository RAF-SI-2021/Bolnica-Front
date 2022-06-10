import {
  GET_REFERRALS,
  CREATE_REFERRAL,
  DELETE_REFERRAL,
  UPDATE_REFERRAL,
} from "../actionTypes";
import * as api from "../../api/index.js";

export const getReferrals = (lbz) => async (dispatch) => {
  try {
    const { data } = await api.fetchReferrals({ lbz });
    dispatch({ type: GET_REFERRALS, data });
  } catch (error) {
    console.log(error);
  }
};

export const createReferral = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createReferral(formData);
    dispatch({ type: CREATE_REFERRAL, data });
  } catch (error) {
    console.log(error);
  }
};

export const updateReferral = (referralData) => async (dispatch) => {
  try {
    const { data } = await api.updateReferral(referralData);
    dispatch({
      type: UPDATE_REFERRAL,
      id: data.zakazaniPregledId,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReferral = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteReferral(formData);
    dispatch({ type: DELETE_REFERRAL, data });
  } catch (error) {
    console.log(error);
  }
};
