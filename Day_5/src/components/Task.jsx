import React, { useState } from "react";
//1. List Rendering Introduction: Write a short note on how lists are rendered in React using map().
const QA = () => {
  return (
    <div>
      <h3>
        1. List Rendering Introduction: Write a short note on how lists are rendered in React using map().
      </h3>
      <ul className="qa">
        <li>map() method used to loop through arrays.</li>
        <li>In React, it helps to render a list of elements dynamically.</li>
        <li>map() method used to avoid writing multiple JSX lines manually.</li>
        <li>It helps create dynamic components based on data.</li>
      </ul>
    </div>
  );
};

// 2. Basic List Rendering: Render an array of numbers using the map() method inside a functional component.
const fruits = ["Apple", "Banana", "Orange"];

function FruitList() {
  return (
    <div>
      <h3>2. Basic List Rendering: Render an array of numbers using the map() method inside a functional component.</h3>
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index} className="fruit-list">{fruit}</li>
      ))}
    </ul>
    </div>
  );
}

// 3. List with Keys: Render a list of names with unique keys for each item.
const NameList = () => {
  const names = [
    { id: 1, name: "Dharun" },
    { id: 2, name: "Sugan" },
    { id: 3, name: "Dharun" },
  ];

  return (
    <div>
      <h3>3. List with Keys: Render a list of names with unique keys for each item.</h3>
      <ul>
        {names.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

// 4. List of Objects: Render a list of user objects with properties like name and age.
const UserList = () => {
  const users = [
    { id: 1, name: 'Dharun', age: 25 },
    { id: 2, name: 'Sugan', age: 32 },
    { id: 3, name: 'Vishwa', age: 28 },
  ];

  return (
    <div>
      <h3>4. List of Objects: Render a list of user objects with properties like name and age.</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name} | Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 5. List with Inline Styling: Render a list of fruits with each item having a different color using inline styling.
const FruitsList = () => {
  const fruits = [
    { id: 1, name: 'Apple', color: 'red' },
    { id: 2, name: 'Mango', color: 'Yellow' },
    { id: 3, name: 'Grapes', color: 'purple' },
    { id: 4, name: 'Orange', color: 'orange' },
  ];

  return (
    <div>
      <h3>5. List with Inline Styling: Render a list of fruits with each item having a different color using inline styling.</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id} style={{ color: fruit.color }}>
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 6. Conditional Rendering with &&: Display "Hello, User!" only if isLoggedIn is true.
const WelcomeUser = ({ isLoggedIn }) => {
  return (
    <div>
      <h3>6. Conditional Rendering with &&: Display "Hello, User!" only if isLoggedIn is true.</h3>
      <h2>Welcome to React</h2>
      {isLoggedIn && <p>Hello, User!</p>}
    </div>
  );
};

// 7. Conditional Rendering with Ternary Operator: Display "Welcome" if isLoggedIn is true, otherwise display "Please Log In".

const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome' : 'Please Log In'}</h2>
    </div>
  );
};

// 8. List with Conditional Rendering: Render a list of tasks and highlight the completed tasks.
const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Do React Task', completed: true },
    { id: 2, title: 'Buy groceries', completed: false },
    { id: 3, title: 'Complete Project', completed: true },
    { id: 4, title: 'Read a book', completed: false },
  ];

  return (
    <div>
      <h3>8. List with Conditional Rendering: Render a list of tasks and highlight the completed tasks.</h3>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : 'pending'}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 
const ItemList = () => {
  const items = []; 

  return (
    <div>
      <h3>9. Rendering Empty Lists: Display "No items available" if the list is empty.</h3>
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 10.Multiple Returns Based on Condition: Return "Morning" if time < 12, "Afternoon" if time < 18, and "Evening" otherwise.
const TimeGreeting = ({ time }) => {
  if (time < 12) {
    return <h2>Morning</h2>;
  }
  if (time < 18) {
    return <h2>Afternoon</h2>;
  }
  return <h2>Evening</h2>;
};

// 11. List with Click Event: Display a list of items and show an alert message when an item is clicked.

const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript", "React"];

  const handleClick = (tech) => {
    alert(`Clicked on ${tech}`);
  };

  return (
    <ul className="tech-list">
      {techs.map((tech, index) => (
        <li 
          key={index} 
          onClick={() => handleClick(tech)} 
          className="tech-item"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};

// 12.Toggle List Items: Create a button that toggles the display of a list on and off.
const ToggleList = () => {
  const [showList, setShowList] = useState(false);

  const items = ["HTML", "CSS", "JavaScript", "React"];

  const toggleListDisplay = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <h3>12.Toggle List Items: Create a button that toggles the display of a list on and off.</h3>
      <button onClick={toggleListDisplay}>
        {showList ? "Hide List" : "Show List"}
      </button>

      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// 13.Filtered List Rendering: Render only even numbers from an array of numbers
const EvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return (
    <div>
      <h3>13.Filtered List Rendering: Render only even numbers from an array of numbers</h3>
      <ul>
        {evenNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};


const Task = () => {
  return (
    <div>
      <QA />
      <hr />
      <FruitList />
      <hr />
      <NameList />
      <hr />
      <UserList />
      <hr />
      <FruitsList />
      <hr />
      <WelcomeUser isLoggedIn={true} />
      <hr />
      <h3>7. Conditional Rendering with Ternary Operator: Display "Welcome" if isLoggedIn is true, otherwise display "Please Log In".</h3>
      <h4>isLoggedIn = true</h4>
      <Greeting isLoggedIn={true} />
      <h4>isLoggedIn = false</h4>
      <Greeting isLoggedIn={false} />
      <hr />
      <TaskList />
      <hr />
      <ItemList />
      <hr />
      <h3>10.Multiple Returns Based on Condition: Return "Morning" if time less than 12, "Afternoon" if time less than 18, and "Evening" otherwise.</h3>
      <TimeGreeting time={10} />
      <hr />
      <h3>11. List with Click Event: Display a list of items and show an alert message when an item is clicked.</h3>
      <TechList />
      <hr />
      <ToggleList />
      <hr />
      <EvenNumbers />
    </div>
  );
};

export default Task;
