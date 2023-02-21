function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

// function WelcomeDialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className={"Dialog-title"}>welcome</h1>
//       <p className={"Dialog-message"}>thank you for visiting our spacecraft</p>
//     </FancyBorder>
//   );
// }

// function SplitPanel(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SlitPane-left">{props.left}</div>
//       <div className="SlitPane-right">{props.right}</div>
//     </div>
//   );
// }

// function app() {
//   return (
//     <SplitPanel>
//       left={<Contacts></Contacts>}
//       right={<Chat></Chat>}
//     </SplitPanel>
//   );
// }

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

ReactDOM.render(
  <SignUpDialog></SignUpDialog>,
  document.getElementById("root")
);
