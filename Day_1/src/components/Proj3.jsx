import React, { useState } from 'react';
import '../assets/Css/Proj3.css';


function Proj3() {
  const [count, setCount] = useState(0);
   return (
    <div className="counter-container">
      <h1>Mini Project 3: Simple Counter</h1>
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Proj3;