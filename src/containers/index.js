import DefaultLayout from './DefaultLayout';
import store from "../views/redux/store/index";
import { addArticle } from "../views/redux/actions/index";

window.store = store;
window.addArticle = addArticle;

export { DefaultLayout };
