import { useState, useEffect } from "react";

import "./App.css";


function App() {
  const [count, setCount]= useState(0)
  useEffect(() => {});
  return (
    <>
      <div className="card">
        <p>
          <h1>inital va;ue: {count}</h1>
          <button>Update the Counter</button>
        </p>
      </div>
    </>
  );
}

export default App;
