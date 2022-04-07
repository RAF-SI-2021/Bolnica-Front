import * as actionType from "../actionTypes";

const doctorReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_DOCTORS:
            return action.data;
        default:
            return state;
    }
};

export default doctorReducer;
