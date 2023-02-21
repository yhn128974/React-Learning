import "./App.css";

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  return <h1>hello,{formatName(user)}</h1>;
}

function getGreeting(user) {
  if (user) {
    return <h1>hello,{formatName(user)}!</h1>;
  }
  return <h1>hello,Stranger.</h1>;
}

export default App;
