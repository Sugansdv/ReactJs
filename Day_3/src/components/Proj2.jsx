import React, { Component } from 'react';
import '../assets/Css/Counter.css'; 

class ClickCounter extends Component {
  state = { count: 0 };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-title">Mini Project 2: Click Counter</h1>
        <h2>Count: {this.state.count}</h2>
        <div>
          <button className="counter-button" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
          <button className="counter-button" onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
          <button className="counter-button" onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
      </div>
    );
  }
}

const Proj2 = () => {
  return (
    <div>
      <ClickCounter />
    </div>
  );
};

export default Proj2;
