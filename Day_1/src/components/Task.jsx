import React from 'react';
import '../assets/Css/Task.css'; //12. Use an external CSS file to style a heading.

// Task: 7. Write a simple JSX code that renders "Welcome to React".
// Task: 9. Create a basic functional component that displays a message.
function Message() {
  // Task: 11.Inline CSS Styling: Apply inline CSS to change the text color of a component.
  const style = { color: 'blue'};
  return <h1 style={style}>Welcome to React </h1>;
}

function User({ name }) {
  return <h2>Hello, I'm {name}!</h2>;
}

// Task: 13.Component Composition: Create two components and render them inside a parent component.
function ParentComponent() {
  return (
    <div>
      <h3>This is a practice task for Day 1</h3>
      {/* Task: 10. Pass a prop to a component that displays a user's name. */}
      <User name="Sugan" />
      <Message />
    </div>
  );
}

function Task() {
  return <ParentComponent />;
}

export default Task;
