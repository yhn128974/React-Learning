class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this;
    alert(`username:${username.value}, password:${password.value}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          usernane
          <input type="text" name="unername" ref={(c) => (this.username = c)} />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            ref={(c) => (this.password = c)}
          />
        </label>
        <button>登陆</button>
      </form>
    );
  }
}
const container = document.getElementById(`root`);
const root = createRoots(container);
root.render(<Login />);
