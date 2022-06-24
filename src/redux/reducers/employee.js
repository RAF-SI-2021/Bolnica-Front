import * as actionType from "../actionTypes";
const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_EMPLOYEES:
      return action.data;
    case actionType.GET_EMPLOYEE:
      return [action.data];
    case actionType.CREATE_EMPLOYEE:
      return [...state, action.data];
    case actionType.UPDATE_EMPLOYEE:
      return state.map((employee) =>
        employee.lbz !== action.data.lbz ? employee : action.data
      );
    case actionType.DELETE_EMPLOYEE:
      return state.filter((employee) =>
        employee.lbz !== action.lbz ? employee : false
      );

    default:
      return state;
  }
};

export default employeeReducer;
