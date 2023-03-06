import { DECREMENT, INCREMENT } from "./constant";
import store from "./store";

//同步action为object对象
export const createInCrementAction = (data) => ({ type: INCREMENT, data });
export const createDeCrementAction = (data) => ({ type: DECREMENT, data });

//异步action为fuction函数,一般需要调用同步action完成任务
export const createInCrementAsyncAction = (data, times) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createInCrementAction(data));
    }, times);
  };
};
