import React from "react";
import ReactLogo from "../assets/react.svg";
import '../assets/Css/Task.css'// Task 7: Create an external CSS file and apply the styles using className.
// Task 2:Create a JSX element that displays "Hello, React!".
function Greeting() {
  // Task 6:Apply inline styles to a heading using the style attribute in JSX.
  const style = {
    color: "green",
    fontStyle: "italic",
  };
  return <h1 style={style}>Hello, React!</h1>;
}

function renderMessage() {
  return <p>Task 11:JSX with Functions: function that returns a JSX element and render it</p>;
}


// Task 12: Multiple Elements in JSX: Use a fragment or div to render multiple JSX elements.

function Task2() {
  const name = "Suganya";
  const sum = 5 + 5;
  const isLoggedIn = true;

  return (
    <div>
      {/* Task 5:Add the className attribute to a JSX element with a CSS class */}
      {/* Task 4: Create a variable with your name and display it in JSX. */}
      <p className="highlight">I'm {name}.</p>
      <p>The result of 5 + 5 is: {sum}</p>{" "}
      {/* Task 3: Write JSX that displays the result of 5 + 5. */}
      {/* Task 9:Use a self-closing tag like <img /> inside JSX. */}
      {/* Task 10: Used imported image */}
      <img src={ReactLogo} alt="React Logo" width="150" />
       {renderMessage()}
        {/* Task 13:Display a message only if a variable is true. */}
       <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>
    </div>
  );
}

function Task() {
  return (
    <div>
      <Greeting />
      <Task2 />
    </div>
  );
}

export default Task;
