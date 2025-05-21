import React, { useState } from 'react';


function ReactState() {
  return (
    <div style={{ padding: '20px'}}>
      <h3> 1. What is State?: Write a short explanation of what state is in React and why it is used. </h3>
      <h3>What is State?</h3>
      <p>
        In React, state is a built-in object that allows components to
        store and manage dynamic data. It represents the current situation or data
        of the component, and when the state changes, React automatically re-renders 
        the component to reflect those changes in the UI.
      </p>

      <h3>Why is State Used?</h3>
      <ul>
        <li>To store changing data (like user input, API responses, counters, etc.)</li>
        <li>To make the UI interactive and dynamic</li>
        <li>To allow components to respond to user actions or events</li>
        <li>To control re-rendering when data updates</li>
      </ul>
    </div>
  );
}
function StateVsPropsDifferences() {
  return (
    <div style={{ padding: '20px'}}>
      <h3>2. State vs. Props: Write three key differences between state and props.</h3>
      <h3>Key Differences:</h3>
      <ul>
        <li>
          <b>Mutability:</b> 
          <br />
          State is mutable (can be changed within the component).  
          <br />
          Props are immutable (cannot be changed by the receiving component).
        </li>
        <br />
        <li>
          <b>Usage:</b> 
          <br />
          State is used to manage data that changes within a component.  
          <br />
          Props are used to pass data from parent to child components.
        </li>
        <br />
        <li>
          <b>Component Control:</b> 
          <br />
          State is controlled by the component itself.  
          <br />
          Props are controlled by the parent component.
        </li>
      </ul>
    </div>
  );
}


function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h3>3. Basic useState Example: Create a functional component that uses useState to store and display a counter starting at 0.</h3>      
      <h3>4. State Update on Button Click: Create a button that increments the counter value when clicked</h3>
      <h3>9. Reset State: Add a button that resets the counter value to 0.</h3>
     <br /> <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button 
        onClick={() => setCount(0)} 
        style={{ marginLeft: '10px' }}
      >
        Reset
      </button>
    </div>
  );
}

function UserInfoComponent() {
  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(0);

  const updateUserInfo = () => {
    setName('Sugan');
    setAge(32);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h3>5. State with Strings: Use useState to store and display a user's name. Update the name on button click.</h3>
      <h3>6. Multiple useState Hooks: Use two useState hooks to store name and age separately.</h3><br />
      <h2>User Info </h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={updateUserInfo}>
        Update Name and Age
      </button>
    </div>
  );
}

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h3> 7. Toggle Boolean State: Create a button that toggles a true/false value in state.</h3>
      <p>Status: {isVisible ? 'True' : 'False'}</p>
      <button onClick={toggleVisibility}>
        Toggle
      </button>
    </div>
  );
}

function InputFieldComponent() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h3>8. Input Field with State: Use useState to store input field text and display it
below the input field.</h3>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..."
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p>You typed: {text}</p>
    </div>
  );
}


function TaskList() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build a project",
    "Read a book",
  ]);
  const [newTask, setNewTask] = useState(""); 

  const addTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, newTask.trim()]);
    setNewTask(""); 
  };

  const removeTask = () => {
    setTasks(tasks.slice(0, tasks.length - 1));
  };

  return (
    <div>
      <h3>
        10.State with Arrays: Use useState to manage an array of tasks and display
them in a list.<br />
11.Add Item to List: Add a button that adds a new item to the list stored in
state.<br />
12.Remove Item from List: Add a button that removes the last item from the
list.<br />
13.State with Conditional Rendering: Display "List is empty" if the task list is
empty using state
        
        </h3><br />
        <h2> Task List</h2>

      {tasks.length === 0 ? (
        <p>List is empty</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}

      <input
        type="text"
        placeholder="Type a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      /><br /><br />
      <button onClick={addTask} disabled={newTask.trim() === ""}>
        Add Task
      </button><br /><br />
      <button onClick={removeTask} disabled={tasks.length === 0}>
        Remove Last Task
      </button>
    </div>
  );
}


const Task = () => {
  
  return (
    <div>
      <ReactState />
      <hr />
      <StateVsPropsDifferences />
      <hr />
      <CounterComponent />
      <hr />
      <UserInfoComponent />
      <hr />
      <ToggleComponent />
      <hr />
      <InputFieldComponent />
      <hr />
      <TaskList />
      <hr />
      
    
    </div>
  );
};

export default Task;
