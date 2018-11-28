import { CONT_DETAILS, GET_TASK, ACC_DETAILS } from "../constants/action_types";

const initialState = {
    getTaskDetails: [],
    taskDetails: [],
    accountDetails: [],
    quoteDetails: [],
    orderDetails: [],
    leadDetails: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONT_DETAILS:
            return {...state, contactDetails: [...state.contactDetails, action.payload]}
        case GET_TASK:
            return {...state, taskDetails: [...state.taskDetails, action.payload]}
        case ACC_DETAILS:
            return { ...state, accountDetails: [...state.accountDetails, action.payload]}
        case CONT_DETAILS:
            return { ...state, quoteDetails: [...state.quoteDetails, action.payload]}
        case GET_TASK:
            return { ...state, orderDetails: [...state.orderDetails, action.payload]}
        case ACC_DETAILS:
            return { ...state, leadDetails: [...state.leadDetails, action.payload]}
        default:
            return state;
    }
}
export default rootReducer;