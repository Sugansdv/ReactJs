import React from 'react';

const Proj3= () => {
  const tasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Complete Project', completed: false },
    { id: 3, title: 'Submit Report', completed: true },
    { id: 4, title: 'Practice React Task', completed: true },
  ];

  return (
    <>
      <h2>Mini Project 3: Task List with Conditional Rendering</h2>
      <h2 className="heading">Completed Tasks</h2>
      <ul className="task-list">
        {tasks
          .filter(task => task.completed)
          .map(task => (
            <React.Fragment key={task.id}>
              <li>{task.title}</li>
            </React.Fragment>
          ))}
      </ul>
    </>
  );
};

export default Proj3;
