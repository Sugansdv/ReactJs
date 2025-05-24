import React, { useState } from 'react';

function Proj4() {
  const users = [
    'Dharun ',
    'Vishwa',
    'Sugan',
    'Anu',
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-filter">
      <h2>User Search Filter</h2>
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
}

export default Proj4;
