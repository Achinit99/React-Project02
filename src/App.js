import "./App.css";
import { useState } from "react";

function App() {
  const [textColor, settextColor] = useState("green");

  return (
    <div className="App">
      <button
        onClick={() => {
          settextColor(textColor === "green" ? "red" : "green");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{ color: textColor }}> Hi My Name is Achini</h1>
    </div>
  );
}

export default App;
