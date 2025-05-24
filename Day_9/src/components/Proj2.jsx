import React from 'react';

const Proj2 = () => {
  const users = [
    { id: 1, name: 'Dharun', age: 24 },
    { id: 2, name: 'Sugan', age: 30 },
    { id: 3, name: 'Vishwa', age: 28 },
  ];

  return (
    <>
      <h2>Mini Project 2: User Table</h2>
      <h2 className="heading">User Table</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Proj2;
