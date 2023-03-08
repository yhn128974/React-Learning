import { DECREMENT, INCREMENT } from "../constant";

//同步action为object对象
export const inCrement = (data) => ({ type: INCREMENT, data });
export const deCrement = (data) => ({ type: DECREMENT, data });
//异步action为fuction函数,一般需要调用同步action完成任务
export const inCrementAsync = (data, times) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(inCrement(data));
    }, times);
  };
};
