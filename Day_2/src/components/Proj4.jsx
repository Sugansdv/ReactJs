import React, { Component } from 'react';
import reactLogo from "../assets/react.svg";  
import '../assets/Css/Proj4.css';


function UserAvatar() {
  const altText = "User Profile Picture";

  return (
    <div className="user-card">
      <img src={reactLogo} alt={altText} className="avatar-image" />
      <h2 className="profile-name">Suganya S</h2>
      <p className="profile-location">Madurai</p>
      <p className="profile-role">Python Full Stack Trainee</p>
    </div>
  );
}

function Proj4() {
  return (
    <div className="app-container">
      <h2>Mini Project 4: User Avatar</h2>
      <UserAvatar />
    </div>
  );
}

export default Proj4;

