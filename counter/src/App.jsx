import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function validateCount() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "4vw",
          margin: " 3rem 0",
        }}
      >
        Simple Counter
      </h1>
      {count == 0 ? <h1>hello world</h1> : <h1>{count}</h1>}
      <div className="btn-holder">
        <button className="btn" onClick={() => setCount(count + 1)}>
          Add Counter by 1
        </button>
        <button className="btn" onClick={validateCount}>
          Subtract Counter by 1
        </button>
      </div>
    </div>
  );
}

export default App;
