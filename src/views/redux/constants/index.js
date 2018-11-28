import {
  CONT_DETAILS,
  GET_TASK,
  ACC_DETAILS
} from "../constants/action-types";

export const getContactDetails = contactDetails => ({
    type: CONT_DETAILS,
    payload: contactDetails 
});

export const getTaskDetails = getTaskDetails => ({
    type: GET_TASK,
    payload: taskDetails
});

export const getAccountDetails = accountDetails => ({
  type: ACC_DETAILS,
  payload: accountDetails
});

export const getQuoteDetails = quoteDetails => ({
  type: QUOTE_DETAILS,
  payload: quoteDetails
});

export const getOrderDetails = orderDetails => ({
  type: ORDER_DETAILS,
  payload: orderDetails
});

export const getLeadDetails = leadDetails => ({
  type: LEAD_DETAILS,
  payload: leadDetails
});
