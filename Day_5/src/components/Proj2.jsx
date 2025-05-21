import React, { useState } from 'react';
import '../assets/Css/Proj2.css'; 

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Complete Project", completed: false },
    { id: 2, name: "Practice React Tasks", completed: false },
    { id: 3, name: "Buy groceries", completed: false },
    { id: 4, name: "Read book", completed: false },
  ]);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="center-container">
      <h3>Mini Project 2: Task Manager</h3>
      <p>Description: Render a list of tasks with a checkbox. Mark the task as completed when the checkbox is clicked.</p>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <label className={task.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Proj2 = () => {
  return (
    <div>
      <TaskManager />
    </div>
  );
};

export default Proj2;
