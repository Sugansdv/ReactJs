import { useState } from "react";

const TodoList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex align-items-center justify-content-between"
        >
          <div className="form-check">
            <input
              className="form-check-input me-2"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text} ({task.category}) - Due: {task.dueDate || "N/A"}
            </span>
          </div>
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
