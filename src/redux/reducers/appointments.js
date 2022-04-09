import * as actionType from "../actionTypes";

const appointmentsReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.DELETE_APPOINTMENT_NURSE:
        case actionType.CREATE_APPOINTMENT_NURSE:
        case actionType.GET_APPOINTMENTS:
            return action.data;
        default:
            return state;
    }
};

export default appointmentsReducer;