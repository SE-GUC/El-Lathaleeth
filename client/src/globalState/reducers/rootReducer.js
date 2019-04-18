import { combineReducers } from "redux";
// import bookReducer from "./bookReducer";
import authReducer from "./authReducer";
import navReducer from "./navReducer";
// import userReducer from "./userReducer";

export default combineReducers({
  //   books: bookReducer,
  auth: authReducer,
  nav: navReducer
  //   users: userReducer
});
