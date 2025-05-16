import React, { Component } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const Welcome = () => {
  return (
    <div className="prop-ans">
      <h3>Task 1</h3>
      <h3>
        1. What are Props?: Write a short note on props and why they are used in
        React functional components.
      </h3>
      <p>
        Props (properties) are a way of passing data from one component to
        another, i.e., from a parent component to a child component.
      </p>
      <ul>
        <li>To pass dynamic data into components.</li>
        <li>To allow communication between components.</li>
        <li>To build reusable and modular UI elements.</li>
      </ul>
    </div>
  );
};

// 2. Simple Text Prop: Create a functional component that accepts a message prop and displays it.
const MessageDisplay = ({ message }) => {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

// 3. Multiple Props: Create a functional component that accepts name and age props and displays them together.
const PersonInfo = ({ name, age }) => {
  return (
    <div>
      <h3>Task 3. Multiple Props:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// 4. Destructuring Props (Basic): Use destructuring to access name and city props inside a functional component.
const UserLocation = ({ name, city }) => {
  return (
    <div>
      <h3>Task 4. Destructuring Props</h3>
      <p>Hello, I'm {name}</p>
      <p>I'm from {city}</p>
    </div>
  );
};

// 5. Boolean Prop: Pass a boolean prop like isStudent to display "Student" or "Not a Student"
const StudentStatus = ({ name, isStudent, institute }) => {
  return (
    <div>
      {name} – {isStudent ? "Student" : "Not a Student"} of {institute}
    </div>
  );
};

// 6. Default Props: Set default props to display "Guest" when no name is provided.
const Greeting = ({ name = "Guest" }) => {
  return <h2>Welcome, {name}!</h2>;
};

// 7. List Rendering with Props: Pass an array of hobbies as props and display them using the map() method.
const HobbiesList = ({ hobbies }) => {
  return (
    <div>
      <h3>Task 7. List Rendering with Props:</h3>
      <h3>My Hobbies:</h3>
      <ul className="hobby-list">
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

// 8. Object Props: Pass a user object containing name, email, and phone, then display each property.
const UserDetails = ({ user }) => {
  const { name, email, phone } = user;

  return (
    <div>
      <h3>Task 8. Object Props:</h3>
      <h3>User Details:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

// 9. Conditional Rendering with Props: Display "Welcome, [Name]" if the name prop is provided, otherwise display "Welcome, Guest".
const WelcomeMessage = ({ name }) => {
  return <h2>Welcome, {name ? name : "Guest"}</h2>;
};

// 10.Inline Styling with Props: Pass a color prop and apply it to style the text dynamically.
const ColoredText = ({ color, text }) => {
  const style = {
    color: color || "black",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return <p style={style}>{text}</p>;
};

// 11.Button Click Event with Props: Pass a function as a prop to display an alert message on button click.
const AlertButton = ({ onClickAlert }) => {
  return <button onClick={onClickAlert}>Click Me</button>;
};

// 12.Reusable Card Component: Create a card component that displays a title and description passed as props.
const ReusableCard = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

const Task = () => {
  const myHobbies = ["Photography", "Coding", "Traveling", "Cooking"];

  const user = {
    name: "Suganya",
    email: "suganya@gmail.com",
    phone: "1234567890",
  };

  const showAlert = () => {
    alert("Hello, This is an alert message on button click.");
  };

  const message = "Parent to Child message";

  return (
    <div>
      <Welcome />
      <hr />
      <MessageDisplay message="Task 2. Simple Text Prop: Hello! Simple Text Prop" />
      <hr />
      <PersonInfo name="Suganya" age={32} />
      <hr />
      <UserLocation name="Suganya" city="Madurai" />
      <hr />
      <div>
        <h3>Task 5. Boolean Prop:</h3>
        <StudentStatus name="Suganya" isStudent={true} institute="VIT" />
        <StudentStatus name="Dharun" isStudent={false} institute="VIT" />
      </div>
      <hr />
      <h3>Task 6. Default Props: </h3>
      <Greeting name="Suganya" />
      <Greeting />
      <hr />
      <HobbiesList hobbies={myHobbies} />
      <hr />
      <UserDetails user={user} />
      <hr />
      <div>
        <h3>Task 9. Conditional Rendering with Props:</h3>
        <WelcomeMessage name="Suganya" />
        <WelcomeMessage />
      </div>
      <hr />
      <div>
        <h3>Task 10. Inline Styling with Props:</h3>
        <ColoredText color="blue" text="This text is styled blue color" />
        <ColoredText color="green" text="This text is styled green color" />
        <ColoredText text="This text is styled with default color" />
      </div>
      <hr />
      <div>
        <h3>Task 11. Button Click Event with Props:</h3>
        <AlertButton onClickAlert={showAlert} />
      </div>
      <hr />
      <div>
        <h3>Task 12.Reusable Card Component:</h3>
        <ReusableCard
          title="Introduction to React"
          description="React is a JavaScript library used to build user interfaces. It allows to create reusable UI components."
        />
        <ReusableCard
          title="Why Use Props?"
          description="Props are used to pass data from parent to child components. They help make components dynamic and reusable."
        />
      </div>
      <hr />
      {/* 13.Child Component Communication: Create a parent component that passes text data to two child components for display. */}
      <div>
        <h2>Task 13. Child Component Communication:</h2>
        <ChildComponent1 text={message} />
        <ChildComponent2 text={message} />
      </div>
    </div>
  );
};

export default Task;
