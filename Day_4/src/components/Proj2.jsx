import React, { Component } from 'react';
import '../assets/Css/Proj2.css'; 

const TaskList = ({ tasks }) => {
  return (
    <div className="task-container">
      <h2>Mini Project 2: Task List</h2>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Proj2 = () => {
  const myTasks = [
    "Complete Project",
    "Buy groceries",
    "Read a book",
    "Practice React Tasks"
  ];

  return (
    <div>
      <TaskList tasks={myTasks} />
    </div>
  );
};

export default Proj2;
