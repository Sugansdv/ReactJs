import React, { Component } from 'react';
import '../assets/Css/Proj4.css';




const Proj4 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return (
    <div className="center-container">
      <h3>Mini Project 4: Number Filter</h3>
      <p>Description: Render a list of numbers. Only display even numbers and apply styling to them.</p>
      <ul className="number-list">
        {evenNumbers.map((num) => (
          <li key={num} className="even-number">{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Proj4;