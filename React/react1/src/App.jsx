import React from "react";
import "./App.css";

let count = 0;

function updateUI() {
  document.getElementById("value").innerText = count;
}

function increment() {
  count++;
  updateUI();
}

function decrement() {
  count--;
  updateUI();
}

function reset() {
  count = 0;
  updateUI();
}

function App() {
  return (
    <div className="container">
      <div className="card">
        <h2>React Counter Application</h2>
        <h1 id="value">0</h1>

        <button onClick={increment}>Increment (+)</button>
        <button onClick={decrement}>Decrement (-)</button>
        <br /><br />
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;