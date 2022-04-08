import * as actionType from "../actionTypes";
const patientReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_PATIENTS:
      return action.data;
    default:
      return state;
  }
};

export default patientReducer;
