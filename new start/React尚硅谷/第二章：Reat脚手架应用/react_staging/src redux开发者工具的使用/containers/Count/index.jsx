import { connect } from "react-redux";
import React, { Component } from "react";
//引入store，用于获取redux中的状态
import store from "../../redux/store";
// 引入action
import {
  createInCrementAction,
  createDeCrementAction,
  createInCrementAsyncAction,
} from "../../redux/actions/count";

const Count = class extends Component {
  state = { ccarName: "123123" };
  // componentDidMount() {
  //   //检测redux中状态的变化，自动调用render
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    // console.log(this.selectNumber.value);
    const { value: data } = this.selectNumber;
    this.props.jia(data * 1);
  };

  decrement = () => {
    const { value: data } = this.selectNumber;
    this.props.jian(data * 1);
  };

  incrementOfOdd = () => {
    const { value: data } = this.selectNumber;
    if (store.getState() % 2 !== 0) this.props.jia(data * 1);
  };

  crementAsync = () => {
    const { value: data } = this.selectNumber;
    this.props.Asyncjia(data * 1, 500);
  };

  render() {
    return (
      <div>
        <h1>当前求和为{this.props.count},下方组件总人数为{ this.props.personsNumber}</h1>
        <div className="context">
          <select ref={(value) => (this.selectNumber = value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementOfOdd}>当前求和为奇数在再加</button>
          <button onClick={this.crementAsync}>+异步加</button>
        </div>
      </div>
    );
  }
};

//传递转态,返回的必须的一个对象
// function mapStateToProps(state) {
//   return { count: state };
// }

//专递操作状态的方法，返回的必须是一个对象内部包含一个方法
// function mapDispatchToProps(dispatch) {
//   return {
//     jia: (data) => {
//       //启动封装的方法
//       dispatch(createInCrementAction(data * 1));
//     },
//     jian: (data) => {
//       dispatch(createDeCrementAction(data * 1));
//     },
//     Asyncjia: (data, time) => {
//       dispatch(createInCrementAsyncAction(data * 1, time));
//     },
//   };
// }

//创建并暴露一个Count的容器组件，包含对应的UI组件
// const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);
export default connect(
  // 这里可以接收到来自reudx的state
  (state) => {
    return {
      count: state.countReducer,
      personsNumber: state.perosnReducer.length,
    };
  },
  //   mapDispatchToProps可以是一个对象
  {
    jia: createInCrementAction,
    jian: createDeCrementAction,
    Asyncjia: createInCrementAsyncAction,
  }
)(Count);
