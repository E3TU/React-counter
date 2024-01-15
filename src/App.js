import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  let increaseCount = () => {
    setCount(count + 1);
  };

  let decreaseCount = () => {
    setCount(count - 1);
  };

  let resetCount = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="container">
      <h1 className="heading">Counter App</h1>
        <h1 className="count">{count}</h1>
        <div className="button-container">
          <button id="decrement" onClick={decreaseCount}>-</button>
          <button onClick={resetCount}>Reset</button>
          <button onClick={increaseCount} id="increment">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
