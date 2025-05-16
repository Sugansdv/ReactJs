import React, { useState } from 'react';
import '../assets/Css/Proj3.css';

const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="text-container">
      <h1>Mini Project 3: Show/Hide Text</h1>
      <button onClick={() => setIsVisible(!isVisible)} className="btn">
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p className="text-message">Hello, World!</p>}
    </div>
  );
};

const Proj3 = () => {
  return (
    <div>
      <ShowHideText />
    </div>
  );
};

export default Proj3;