import { legacy_createStore as createStore, applyMiddleware ,combineReducers} from "redux";
import countReducer from "./reducers/count";
import perosnReducer from "./reducers/person";
// 引入redux-thunk用于支持异步action
import thunk from "redux-thunk";

// 汇总reducer
const allReducer =combineReducers({countReducer,perosnReducer})
export default createStore(allReducer, applyMiddleware(thunk));
 