import { ADDPERSON } from "../constant";

// 初始化人的列表
const initState = [{ id: "001", name: "tom", age: 20 }];

// redux中的reducer必须是一个纯函数
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDPERSON:
      preState = [...preState, data];
      return preState;
    default:
      return preState;
  }
}
