import React, { useState } from 'react';
import '../assets/Css/Proj3.css';


function SimpleCalculator({ num1, num2 }) {
  const sum = num1 + num2;

  return (
    <div>
      <h2>Mini Project 3: Simple Calculator</h2>
      <p>Number 1: {num1}</p>
      <p>Number 2: {num2}</p>
      <p>Sum of Num1 and Num2 is {sum}</p>
    </div>
  );
}

function Proj3() {
  return (
    <div>
      <SimpleCalculator num1={10} num2={20} />
    </div>
  );
}

export default Proj3;