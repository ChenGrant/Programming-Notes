import { combineReducers } from "redux";
import apiReducer from "./api/apiReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  api: apiReducer
});

export default rootReducer;
