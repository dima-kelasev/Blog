import { combineReducers } from "redux";
import postReducers from "./post/postReducers";
import { themeReducer } from "./theme/themeReducers";

const Reducers = combineReducers({
  postReducers,
  themeReducer,
});

export default Reducers;
