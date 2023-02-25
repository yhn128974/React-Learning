class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { id: 1, name: "xiaozang", age: 18 },
        { id: 2, name: "xiaohua", age: 20 },
      ],
    };
  }
  add = () => {
    const { person } = this.state;
    const p = { id: person.length + 1, name: "xiaowang", age: 24 };
    this.setState({ person: [p, ...person] });
  };
  render() {
    return (
      <div>
        <h2>show person with id</h2>
        <button onClick={this.add}>add xiaowang</button>
        <ul>
          {this.state.person.map((oneperson) => {
            return (
              <li key={oneperson.id}>
                personName is:{oneperson.name},age is {oneperson.age}
                <input type="text" />
              </li>
            );
          })}
        </ul>

        <h2>show person with index</h2>
        <button onClick={this.add}>add xiaowang</button>
        <ul>
          {this.state.person.map((oneperson, index) => {
            return (
              <li key={index}>
                    personName is:{oneperson.name},age is {oneperson.age}
                    <input type="text" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Person></Person>);
