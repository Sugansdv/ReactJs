import React, { useState } from "react";
import '../assets/Css/Proj4.css'; 

const Proj4 = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(prev => !prev);
  };

  return (
    <div className="container">
      <h1>Mini Project 4: Light Toggle</h1>
      <button
        className={`toggle-btn ${isLightOn ? "on" : "off"}`}
        onClick={toggleLight}
      >
        {isLightOn ? "Light ON" : "Light OFF"}
      </button>
    </div>
  );
};



export default Proj4;
