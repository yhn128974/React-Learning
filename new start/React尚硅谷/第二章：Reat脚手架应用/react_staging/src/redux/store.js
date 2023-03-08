import { legacy_createStore as createStore, applyMiddleware } from "redux";

import allReducer from "./reducers/index";
// 引入redux-thunk用于支持异步action
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// 汇总reducer

export default createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
