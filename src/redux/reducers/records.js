import * as actionType from "../actionTypes";

const recordReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_RECORD:
      return [...state, action.data];
    default:
      return state;
  }
};

export default recordReducer;
