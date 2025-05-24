import React from 'react';

const Proj1 = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

  return (
    <>
      <h2>Mini Project 1: Fruit List</h2>
      <h2 className=" font-bold mb-2">Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <React.Fragment key={index}>
            <li>{fruit}</li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default Proj1;