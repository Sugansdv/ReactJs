import React, { useState } from 'react';

function Proj3() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <h3>Mini Project 3: Show/Hide Paragraph
</h3>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>

      {isVisible && (
        <p>Welcome to React ..</p>
      )}
    </div>
  );
}

export default Proj3;