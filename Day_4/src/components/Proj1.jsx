import React from 'react';
import '../assets/Css/Proj1.css'

const ProfileCard = ({ name = "Guest", age = "Unknown", city = "Unknown" }) => {
  return (
    <div className="profile-card">
      <h2>Profile Card</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

const Proj1 = () => {
  return (
    <div>
      <h2>Mini Project 1: Profile Card</h2>
      <ProfileCard name="Suganya" age={32} city="Madurai" />
      <ProfileCard /> 
    </div>
  );
};

export default Proj1;
