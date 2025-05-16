import React, { Component } from 'react';
import '../assets/Css/Proj2.css'; 

function Greeting({ name }) {
  const style = {
    backgroundColor: 'lightblue',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '2em',
    color: 'darkgreen'
  };
  return <div className="greet-container" style={style}>Hello, {name}!</div>;
}

function Proj2() {
  return (
    <div>
      <h1>Mini Project 2: Greeting App</h1>
      <Greeting name="Suganya S" />
    </div>
  );
};

export default Proj2;
