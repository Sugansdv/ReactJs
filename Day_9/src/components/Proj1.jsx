import React, { useState, useEffect } from 'react';

function Proj1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <h1>Counter: {count}</h1>
      
      <button className="btn" onClick={() => setCount(count - 1)}>Decrease</button>
      <button className="btn" onClick={() => setCount(count + 1)}>Increase</button>
      <button className="btn" onClick={() => setCount(0)}>Reset</button>
    </>
  );
}


export default Proj1;
