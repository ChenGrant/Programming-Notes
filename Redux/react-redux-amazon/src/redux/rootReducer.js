import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

export default rootReducer;
