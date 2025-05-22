import React, { useState } from 'react';

function Proj1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h3>
Mini Project 1: Click Counter
      </h3>
      <button onClick={handleClick}>Click Me</button>
      <p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>
    </div>
  );
}


export default Proj1;
