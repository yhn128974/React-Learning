class Life extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    opacity: 1,
    count: 0,
  };
  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }; 
  force = () => {
 
    this.forceUpdate();
  };

  static getDerivedStateFromProps(props, state) {
    console.log(`getDerivedStateFromProps`, props, state);
    return null;
  }

  // UNSAFE_componentWillMount() {
  //   console.log(`componentWillMount`);
  // }
  getSnapshotBeforeUpdate(props) {
    console.log(`getSnapshotBeforeUpdate`, props);
    let obj = {
      sex:"boy"
    };
    return obj ;
  }
  componentDidUpdate(preProps, preData,snapshotValue) {
    console.log(`componentDidUpdate`,preProps, preData,snapshotValue);
  }
  componentDidMount() {
    console.log(`componentDidMount`);
    // this.timer = setInterval(() => {
    //   let opacity = this.state.opacity - 0.1;
    //   if (opacity <= 0) {
    //     opacity = 1;
    //   }
    //   this.setState({
    //     opacity,
    //   });
    // }, 200);
  }

  //控制组件更新的钩子
  shouldComponentUpdate() {
    return true;
  }
  // UNSAFE_componentWillUpdate() {
  //   console.log(` componentWillUpdate`);
  // }
  componentWillUnmount() {
    console.log(`componentWillUnmount`);
    // clearInterval(this.timer);
  }
  //父类专递的值会更新的时候调用
  // UNSAFE_componentWillReceiveProps(props) {
  //   console.log(`componentWillReceiveProps`, props);
  // }
  render() {
    console.log(`render`);
    return (
      <div>
        <h2>{this.props.uname}</h2>
        <h2 style={{ opacity: this.state.opacity }}>React 学不会不活了</h2>
        <button onClick={this.death}>不活了，不活了</button>
        <button onClick={this.force}>点击强制更新</button>
      </div>
    );
  }
}

class FatherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "longyou",
    };
  }
  hangechangeunname = () => {
    this.setState({
      uname: "ethanyu",
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.hangechangeunname}>点击我更新uname</button>
        <Life uname={this.state.uname} count={"1999"}></Life>;
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<FatherComponent></FatherComponent>);

// import { createRoot } from 'react-dom/client';
// const root = createRoot(document.getElementById('root'));
// root.render(<FatherComponent/>);
