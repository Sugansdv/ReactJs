import React, { Component } from 'react';
import '../assets/Css/Proj4.css';

const ButtonClick = ({ onClick }) => {
  return (
    <button onClick={onClick}>Click Me</button>
  );
};


const Proj4 = () => {
  const handleClick = () => {
    console.log('Button Clicked');
  };
  return (
     <div>
      <h2>Mini Project 4: Button Click Handler</h2>
      <ButtonClick onClick={handleClick} />
    </div>
  );
};

export default Proj4;