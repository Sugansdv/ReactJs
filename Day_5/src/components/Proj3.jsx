import React from 'react';
import '../assets/Css/Proj3.css';

const GreetingMessage = () => {
    const now = new Date();
  const currentHour = now.getHours();
  const currentTime = now.toLocaleTimeString();
  let greeting = "";
  let style = {};

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning!";
    style = { color: "orange" };
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon!";
    style = { color: "green" };
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good Evening!";
    style = { color: "blue" };
  } else {
    greeting = "Good Night!";
    style = { color: "purple" };
  }

  return (
    <div className="center-container">
      <h1 className="greeting-text" style={style}>{greeting}</h1>
      <p className="time-text">Current Time: {currentTime}</p>
    </div>
  );
};

const Proj3 = () => {
   return (
    <div className="proj3">
      <h3>Mini Project 3: Greeting Message</h3>
      <p>Description: Display different greeting messages based on the time of the day using multiple return conditions.</p>
      <GreetingMessage />
    </div>
  );
};

export default Proj3;