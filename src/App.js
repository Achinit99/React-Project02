import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Achi}>
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
