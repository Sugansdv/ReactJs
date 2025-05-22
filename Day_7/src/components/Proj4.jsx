import React, { useState } from 'react';

function Proj4() {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
  };

  const buttonStyle = {
    backgroundColor: disabled ? 'red' : '',
    color: disabled ? 'white' : '',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
  };

  return (
    <div>
      <h3>Mini Project 4: Disable After Click</h3>
    <button onClick={handleClick} disabled={disabled} style={buttonStyle}>
      {disabled ? 'disabled' : 'Click Me'}
    </button>
    </div>
  );
}

export default Proj4;
