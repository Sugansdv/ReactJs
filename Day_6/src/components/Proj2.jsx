import React, { useState } from "react";
import '../assets/Css/Proj2.css'; 

const Proj2 = () => {
  const [name, setName] = useState(""); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Mini Project 2: Name Display
</h1>
      <h2>Enter Your Name:</h2>
      <input
        type="text"
        placeholder="Type your name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", fontSize: "1rem" }}
      />
      <h3>Your name is: {name || "..."}</h3>
    </div>
  );
};
export default Proj2;
