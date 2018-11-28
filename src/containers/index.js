import DefaultLayout from './DefaultLayout';
import store from "../views/redux/store/index";
import {
  getContactDetails,
  getTaskDetails,
  getAccountDetails,
  getQuoteDetails,
  getOrderDetails,
  getLeadDetails,
} from "../views/redux/actions/index";

window.store = store;
window.getContactDetails = getContactDetails;
window.getTaskDetails = getTaskDetails;
window.getAccountDetails = getAccountDetails;
window.getQuoteDetails = getQuoteDetails;
window.getOrderDetails = getOrderDetails;
window.getLeadDetails = getLeadDetails;

export { DefaultLayout };
