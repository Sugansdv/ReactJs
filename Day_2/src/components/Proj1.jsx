import React from 'react';
import '../assets/Css/Proj1.css'

function ProfileCard() {
  const style = {
    color: "brown",
    fontWeight: "bold",
    fontSize: "18px",
    margin: "10px 0",
  };

  const name = "Suganya DV";
  const age = 32;
  const location = "Madurai, India";

  return (
    <div className="profile-card">
      <p className="profile-name">{name}</p>
      <p style={style}>Age: {age}</p>
      <p className="profile-location">{location}</p>
    </div>
  );
}

function Proj1() {
  return (
    <div>
      <h1>Mini Project 1: Simple Profile Card</h1>
      <ProfileCard />
    </div>
  );
}

export default Proj1;
