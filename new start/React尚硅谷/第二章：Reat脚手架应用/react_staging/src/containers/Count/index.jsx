import CountUI from "../../components/Count";

import { connect } from "react-redux";
// 引入action
import {
  createInCrementAction,
  createDeCrementAction,
  createInCrementAsyncAction,
} from "../../redux/count_action";

//传递转态,返回的必须的一个对象
function mapStateToProps(state) {
  return { count: state };
}

//专递操作状态的方法，返回的必须的一个对象内部包含一个方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (data) => {
      //启动封装的方法
      dispatch(createInCrementAction(data * 1));
    },
    jian: (data) => {
      dispatch(createDeCrementAction(data * 1));
    },
    Asyncjia: (data, time) => {
      dispatch(createInCrementAsyncAction(data * 1, time));
    },
  };
}

//创建并暴露一个Count的容器组件，包含对应的UI组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default CountContainer;
