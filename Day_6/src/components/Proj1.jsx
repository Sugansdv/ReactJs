import React, { useState } from "react";
import '../assets/Css/Proj1.css'


const Proj1 = () => {

  const [count, setCount] = useState(0); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mini Project 1: Counter App</h1>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count - 1)}>Decrease</button>{" "}
      <button onClick={() => setCount(count + 1)}>Increase</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Proj1;
