// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2,
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           参与:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           来宾人数:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange}
//           />
//         </label>
//       </form>
//     );
//   }
// }
// ReactDOM.render(<Reservation></Reservation>, document.getElementById(`root`));

// let person = {
//   unname: "longyou",
//   age: "23",
//   sex: "male",
//   address: "重庆",
// };

// let key = "unname";
// let value = "ethanyu";
// person[key] = value;
// console.log(person);

// ReactDOM.createRoot(mountNode).render(<input value="hi" />);

// setTimeout(function () {
//   ReactDOM.createRoot(mountNode).render(<input value={null} />);
// }, 1000);

// 非受控组件

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.input = React.createRef();
//     }

//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.input.current.value);
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" ref={this.input} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
// }

// ReactDOM.render(<NameForm></NameForm>, document.getElementById(`root`));

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.CreatRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert("select file- ${this.fileInput.current.files[0].name}");
  }

  render() {
    return (
      <from form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </from>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FileInput />);
