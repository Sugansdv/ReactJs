import React from 'react';

const Proj4 = () => {
  const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

  return (
    <>
    <h2>Mini Project 4: Dynamic Number List</h2>
      <h2 className="heading">Numbers Greater Than 50</h2>
      <ul className="number-list">
        {numbers
          .filter(num => num > 50)
          .map((num, index) => (
            <React.Fragment key={index}>
              <li>{num}</li>
            </React.Fragment>
          ))}
      </ul>
    </>
  );
};

export default Proj4;
