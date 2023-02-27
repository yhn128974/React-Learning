import hello from "./index.module.css";

function Hello() {
  //函数式组件直接return
  return <div className={hello.hellocontenter}>hello react！！</div>;
}
export default Hello;
