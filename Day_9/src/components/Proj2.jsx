import React, { useState, useEffect } from 'react';

function Proj2() {
   // State to hold the users data
  const [users, setUsers] = useState([]);

  // Fetch users from API when component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())  // Convert response to JSON
      .then(data => setUsers(data));  // Save data in state
  }, []);  // Empty array means this runs only once

  return (
    <div className="userlist-container">
      <h2>User List</h2>
      <ul className="userlist">
        {users.map(user => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proj2;
