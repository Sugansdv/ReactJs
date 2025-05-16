import React, { useState } from 'react';
import '../assets/Css/Proj3.css';

const ColorfulText = ({ text = "Default Text", color = "black" }) => {
  const style = {
    color: color,
    fontWeight: "bold",
    fontSize: "1.5em"
  };

  return (
    <div className="colorful-text">
      <p style={style}>{text}</p>
    </div>
  );
};

const Proj3 = () => {
   return (
    <div>
      <h2>Mini Project 3: Colorful Text</h2>
      <ColorfulText text="This text is styled with Red color" color="red" />
      <ColorfulText text="This text is styled with Green color" color="green" />
      <ColorfulText text="This text is styled with Default Color" />
      <ColorfulText />
    </div>
  );
};

export default Proj3;