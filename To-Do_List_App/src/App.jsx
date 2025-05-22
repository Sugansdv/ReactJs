import { useState } from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const addTask = ({ text, category, dueDate }) => {
    const newTask = {
      id: Date.now(),
      text,
      category,
      dueDate,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  const filteredTasks = tasks.filter((task) => {
    const statusMatch =
      filterStatus === "all" ||
      (filterStatus === "completed" && task.completed) ||
      (filterStatus === "pending" && !task.completed);
    const categoryMatch =
      filterCategory === "all" || task.category === filterCategory;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4 fw-bold text-center">To-Do List</h1>
      <TodoForm addTask={addTask} />

      <div className="row mb-3">
        <div className="col-md-6">
          <select
            className="form-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
      </div>

      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
