import React from "react";

function Task1() {
  return (
    <>
      <h3>
        1. Introduction to React Fragment: Write a short explanation of what
        React.Fragment is and why it is used.
      </h3>
      <p>
        React.Fragment is a special component in React that group a list of
        children elements without adding extra nodes to the DOM.
      </p>
      <h3>Why use React.Fragment?</h3>
      <ul>
        <li>Normally, React components must return a single parent element.</li>
        <li> To return multiple elements without wrapping them in a div (which adds an
        extra node to the HTML), React.Fragment is used.</li>
        <li>  It helps keep the DOM clean and avoids unnecessary HTML elements that
        might affect styling or layout.</li>
      </ul>
    </>
  );
}

function Task2() {
  return (
    <React.Fragment>
      <h3> 2. Basic Fragment Example: Create a functional component that renders two paragraphs using React.Fragment.</h3>
      <p>First paragraph.</p>
      <p>Second paragraph.</p>
    </React.Fragment>
  );
}

function Task3() {
  return (
    <>
      <h4>3. Shorthand Fragment Syntax:</h4>
      <p>Using the shorthand <>...</> instead of React.Fragment to render multiple elements.</p>
    </>
  );
}

function Task4() {
  const items = ['Apple', 'Mango', 'Orange'];

  return (
    <>
    <h3>4. Fragment with List: Render a list of items using React.Fragment without extra divs.</h3>
    <ul>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <li>{item}</li>
        </React.Fragment>
      ))}
    </ul>
    </>
  );
}

function Task5() {
  return (
    <>
      <h2 className="title">5. Styling without Extra Divs:</h2>
      <p className="description">Apply CSS to sibling elements without adding unnecessary parent divs using fragments.</p>
    </>
  );
}

function Task6() {
  return (
    <>
      <h3>
        6. Keys in List Rendering: Write a short note on the importance of keys in React lists.
      </h3>
      <p>
        In React, keys are special identifiers used when rendering lists of elements. They help React identify which items have changed, been added, or removed, allowing efficient updates to the UI.</p>
      <h3>importance of keys in React lists</h3>
      <ul>
        <li>Uniqueness: Each key should be unique among siblings to correctly track elements.</li>
        <li>Performance: Keys help React minimize DOM operations by reusing existing elements instead of re-rendering everything.</li>
        <li>Consistency: Prevents UI bugs like incorrect element reordering or loss of component state during updates.</li>
      </ul>
    </>
  );
}

function Task7() {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Mango' },
    { id: 3, name: 'Orange' },
  ];

  return (
    <>
    <h3>7. Basic List with Keys: Render a list of fruits with unique keys</h3>
    <ul>
      {fruits.map(fruit => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
    </>
  );
}

function Task8() {
  const fruits = ['Apple', 'Mango', 'Orange'];

  return (
    <>
      <h3>
        8. List without Keys: Render a list without keys and observe the console warning.
      </h3>
      <ul>
      {fruits.map(fruit => (
        <li>{fruit}</li> 
      ))}
    </ul>    
    </>
  );
}

function Task9() {
  const users = ['Dharun', 'Vishwa', 'sugan'];

  return (
    <>
    <h3>9. Dynamic List with Keys: Render a list of user names from an array with keys
generated from the index</h3>
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>    
    </>
  );
}

function Task10() {
  const users = [
    { id: 'u1', name: 'Sugan' },
    { id: 'u2', name: 'Dharun' },
    { id: 'u3', name: 'Vishwa' },
  ];

  return (
    <>
    <h3>10.Unique IDs as Keys: Use unique id properties from an object array as keys
when rendering a list.</h3>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  );
}

function Task11() {
  const data = [
    { id: 1, name: 'Dharun', age: 25 },
    { id: 2, name: 'Sugan', age: 32 },
    { id: 3, name: 'Vishwa', age: 28 },
  ];

  return (
    <>
    <h3>11.Fragment with Table Rows: Render table rows using React.Fragment without unnecessary wrapper elements.</h3>
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <React.Fragment key={item.id}>
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </>
  );
}

function Task12() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
    <h3>12.Map List with Conditional Rendering: Render a list of numbers, displaying only even numbers with keys.</h3>
    <ul>
      {numbers.map((num) =>
        num % 2 === 0 ? (
          <li key={num}>{num}</li>
        ) : null
      )}
    </ul>
    </>
  );
}
function Task13() {
  const courses = [
    {
      id: 'course1',
      title: 'React Basics',
      lessons: [
        { id: 'lesson1', title: 'Introduction' },
        { id: 'lesson2', title: 'Components' },
      ],
    },
    {
      id: 'course2',
      title: 'Advanced React',
      lessons: [
        { id: 'lesson3', title: 'Hooks' },
        { id: 'lesson4', title: 'useState vs. useEffect' },
      ],
    },
  ];

  return (
    <>
    <h3>13.Nested List with Keys: Render a nested list where each inner list has unique keys</h3>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <ul>
            {course.lessons.map(lesson => (
              <li key={lesson.id}>{lesson.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function Task() {
  return (
    <div>
      <Task1 />
      <hr />
      <Task2 />
      <hr />
      <Task3 />
      <hr />
      <Task4 />
      <hr />
      <Task5 />
      <hr />
      <Task6 />
      <hr />
      <Task7 />   
      <hr />
      <Task8 />
      <hr />
      <Task9 />
      <hr />
      <Task10 />
      <hr />
      <Task11 />
      <hr />
      <Task12 />
      <hr />
      <Task13 />
    </div>
  );
}

export default Task;
