import React from 'react';
import '../assets/Css/Proj1.css'

const WelcomeMessage = () => {
  return <div className="welcome-message">Welcome to React Learning!</div>;
};

const Proj1 = () => {
  return (
    <div>
      <h2>Mini Project 1: Welcome Message</h2>
      <WelcomeMessage />
    </div>
  );
};

export default Proj1;
