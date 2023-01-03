import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Kawshalya" age={21} email="achinit@gmail.com" />;
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.age} </h1>
      <h1> {props.email} </h1>
    </div>
  );
};

export default App;
