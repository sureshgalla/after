import { combineReducers } from "redux";
import products from "./productsReducre";
import cart from "./cartReducer";
import apiCallsInProgress from "./apiStatusReducer";

//import cartProduct from './cartReducer'

const rootReducer = combineReducers({
  products,
  apiCallsInProgress,
  cart,
});

export default rootReducer;
