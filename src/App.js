import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="heading">Counter App</h1>
        <h1 className="count">10</h1>
        <div className="button-container">
          <button id="decrement">-</button>
          <button>Reset</button>
          <button id="increment">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
