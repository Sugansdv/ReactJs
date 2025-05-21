import React from "react";
import '../assets/Css/Proj1.css';

const StudentList = () => {
  const students = [
    { id: 1, name: "Dharun", marks: 78 },
    { id: 2, name: "Sugan", marks: 45 },
    { id: 3, name: "Vishwa", marks: 62 },
    { id: 4, name: "Lia", marks: 39 },
    { id: 5, name: "Jax", marks: 90 },
  ];

  return (
    <div className="center-container">
      <h3>Student List</h3>
      <ul className="stud-list">
        {students.map((student) => (
          <li
            key={student.id}
            style={{
              color: student.marks > 50 ? "green" : "red",
              fontWeight: student.marks > 50 ? "bold" : "normal",
            }}
          >
            {student.name} - {student.marks} marks
          </li>
        ))}
      </ul>
    </div>
  );
};

const Proj1 = () => {
  return (
    <div className="center-container">
      <h3 className="task-name">
        Mini Project 1: Student List
        <br /><br />
        Description: Render a list of student names with their marks. Highlight the names of students who scored more than 50.
      </h3>
      <StudentList />
    </div>
  );
};

export default Proj1;
