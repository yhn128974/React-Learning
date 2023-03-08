import countReducer from "./count";
import perosnReducer from "./person";
import { combineReducers } from "redux";

export default combineReducers({ countReducer, perosnReducer });
