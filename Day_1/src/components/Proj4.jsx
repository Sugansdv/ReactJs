import React, { Component } from 'react';
import '../assets/Css/Proj4.css';


function Proj4() {
  const hobbies = [
    "Coding",
    "Photography",
    "Traveling",
    "Music",
    "Cooking",
  ];

  return (
    <div className="hobbies-container">
      <h2>Mini Project 4: Hobbies List</h2>
      <ul className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proj4;
