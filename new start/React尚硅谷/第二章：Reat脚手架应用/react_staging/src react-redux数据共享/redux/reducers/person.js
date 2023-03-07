import { ADDPERSON } from "../constant";

// 初始化人的列表
const initState = [{ id: "001", name: "tom", age: 20 }];

export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDPERSON:
      preState = [data, ...preState];
    default:
      return preState;
  }
}
