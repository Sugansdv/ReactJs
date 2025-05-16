import React from 'react';
import '../assets/Css/Proj1.css'

function PersonalBio(props) {
  return (
    <div className="personal-bio">
      <h2>{props.name}</h2>
      <p>{props.age} years</p>
      <p>{props.bio}</p>
    </div>
  );
}

function Proj1() {
  return (
    <div>
      <h1>Mini Project 1: Personal Bio</h1>
      <PersonalBio
        name="Suganya S"
        age={32}
        bio="I'm a Python Full Stack Trainee passionate about coding."
      />
    </div>
  );
};

export default Proj1;
