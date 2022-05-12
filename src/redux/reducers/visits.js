import * as actionType from "../actionTypes";

const labVisitReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_LAB_VISITS:
      return action.data;
    case actionType.UPDATE_LAB_VISITS:
      return state.map((labVisit) =>
        labVisit.lbz !== action.data.lbz ? labVisit : action.data
      );
    default:
      return state;
  }
};

export default labVisitReducer;
