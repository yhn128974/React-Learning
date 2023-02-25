class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  //#REGION
  /**
   * 高阶函数：如果一个函数符合
   * 1.函数参数接收一个函数
   * 2.函数返回一个函数
   * 常见的函数有Promise，setimeout(()=>{...}，1000），arr.map（）等等
   * 函数柯里化：通过函数继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
   */
  //#ENDregion
  //   saveFromDate = (dataType) => {
  //     return (event) => {
  //       this.setState({ [dataType]: event.target.value });
  //     };
  //     };
  saveFromDate = (dataType, value) => {
    this.setState({ [dataType]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    alert(`username:${username}, password:${password}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          usernane:
          <input
            value={this.state.username}
            type="text"
            name="unername"
            // onChange={this.saveFromDate("username")}
            onChange={(event) => {
              this.saveFromDate("username", event.target.value);
            }}
          />
        </label>

        <label>
          password:
          <input
            value={this.state.password}
            type="password"
            name="password"
            // onChange={this.saveFromDate("password")}
            onChange={(event) => {
              this.saveFromDate("password", event.target.value);
            }}
          />
        </label>
        <button>登陆</button>
      </form>
    );
  }
}

ReactDOM.render(<Login />, document.getElementById("root"));
