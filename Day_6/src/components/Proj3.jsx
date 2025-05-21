import React, { useState } from "react";
import '../assets/Css/Proj3.css'; 

const Proj3 = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const removeLastTask = () => {
    setTasks(tasks.slice(0, tasks.length - 1));
  };

  return (
    <div className="container">
      <h1>Mini Project 3: Task List
</h1>
      <h2>To-Do List</h2>

      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn" onClick={addTask} disabled={newTask.trim() === ""}>
        Add Task
      </button>

      <button className="btn"
        onClick={removeLastTask}
        disabled={tasks.length === 0}
        style={{ marginLeft: "8px" }}
      >
        Remove Last Task
      </button>

      {tasks.length === 0 ? (
        <p>List is empty</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="btn" onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Proj3;
