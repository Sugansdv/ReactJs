import React, { Component } from 'react';
import '../assets/Css/Counter.css'

// 1. Functional Component Creation: Create a simple functional component that displays "Welcome to React!"
const Welcome = () => {
return <h1>Task 1: "Welcome to React!"</h1>;
};

// 2. Functional Component with Static Text: Display a static message like "Learning React is fun!" inside a functional component.
const StaticMessage = () => {
  return (
    <div>
      <h1>Task 2: Learning React is fun!</h1>
    </div>
  );
};

// 3. Render Multiple Functional Components: Render three functional components displaying different messages.
const Message1 = () => <p>React is declarative!</p>;
const Message2 = () => <p>Components are reusable!</p>;
const Message3 = () => <p>JSX is powerful!</p>;

const MulMsg = () => {
  return (
    <div>
      <h1>Task 3: Render Multiple Functional Components</h1>
      <Message1 />
      <Message2 />
      <Message3 />
    </div>
  );
};

// 4. Basic Class Component: Create a class component that displays "This is a Class Component"
class ClassComponent extends Component {
  render() {
    return <h2>Task 4: This is a Class Component</h2>;
  }
}

// 5. Class Component with Static Text: Display "Hello from Class Component!" inside the class component.
class StaticMessageComponent extends Component {
  render() {
    return <h2>Task 5: Hello from Class Component!</h2>;
  }
}

// 6. Render Multiple Class Components: Render two class components with different static text messages.
class FirstComponent extends Component {
  render() {
    return (
      <div>
        <p>First Class Component</p>
      </div>
    );
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <div>
        <p>Second Class Component</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Task 6: Multiple Class Components Demo</h1>
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}


// 7. State in Class Component: Create a class component that initializes a counter with 0 and displays it.
// 8. State Update in Class Component: Add a button to the counter component that increments the value on click.
// 10.External CSS Styling in Class Component: Use an external CSS file to style the text in a class component.
class SimpleCounter extends Component {
  state = { count: 0 };

  render() {
    return (
      <div className="counter-container">
        
        <h1 className="counter-title">Counter</h1>
        <h1>Count: {this.state.count}</h1>
        <button className="counter-button" onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <button className="counter-button" onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <button className="counter-button" onClick={() => this.setState({ count: 0})}>
          reset
        </button>
      </div>
    );
  }
}
// 9. JSX Styling in Functional Component: Apply inline styling to a functional component message.
const InlineStyle = () => {
  const style = { color: 'purple', fontSize: '1.5em', fontWeight: 'bold' };
  return <p style={style}>Task 9. JSX Styling in Functional Component</p>;
};

// 11.Conditional Rendering in Functional Component: Display "React is Cool!" only if a boolean variable is true.
const ConditionalStatement= () => {
  const isCool = true; 

  return (
    <div>
      <h5>Task 11.Conditional Rendering in Functional Component</h5>
      {isCool && <h3>React is Cool!</h3>}
    </div>
  );
};

// 12.Render Nested Components: Render one functional component inside another functional component.
const ChildComponent = () => (
  <div>
    <p>Child component</p>
  </div>
);

const ParentComponent = () => (
  <div>
    <h3>Task 12.Render Nested Components:</h3>
    <h2>Parent Component</h2>
    <ChildComponent /> 
  </div>
);

// 13.Lifecycle Method in Class Component: Use componentDidMount() to display a message in the console when the class component is mounted.
class Mount extends Component {
  componentDidMount() {
    console.log('Task13 Lifecycle Method in Class Component');
  }

  render() {
    return <p>Task 13: Used componentDidMount() to display a message in the console when the class component is mounted.</p>;
  }
}


const Task = () => {
  return (
    <div>
      <Welcome />
      <hr />
      <StaticMessage />
      <hr />
      <MulMsg />
      <hr />
      <ClassComponent />
      <hr />
      <StaticMessageComponent />
      <hr />
      <App />
      <hr />
      <h3> Task 7,8,10</h3>
      <SimpleCounter  />
      <hr />
      <InlineStyle />
      <hr />
      <ConditionalStatement />
      <hr />
      <ParentComponent />
      <hr />
      <Mount />
      <hr />
    </div>
  );
};

export default Task;
