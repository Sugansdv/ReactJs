import React, { Component } from 'react';
import '../assets/Css/Proj2.css'; 

function TemperatureDisplay({ temperature }) {
  let message = "";

  if (temperature > 30) {
    message = "Hot";
  } else if (temperature < 15) {
    message = "Cold";
  } else {
    message = "Normal";
  }

  return (
    <div className="box">
      <h2>Temperature: {temperature}°C</h2>
      <p>It's {message}</p>
    </div>
  );
}

function Proj2() {
  return (
    <div>
      <h1>Mini Project 2: Temperature Display</h1>
      <TemperatureDisplay temperature={35} />
    </div>
  );
}

export default Proj2;
