import * as actionType from "../actionTypes";

const patientHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_PATIENTS_HISTORY:
      return action.data;
    default:
      return state;
  }
};

export default patientHistoryReducer;
