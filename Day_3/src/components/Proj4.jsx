import React, { Component } from 'react';
import '../assets/Css/Proj4.css';

class Timer extends Component {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="timer-container">
        <h1>Mini Project 4: Class Component Timer</h1>
        <p className="time-display">{this.state.currentTime}</p>
      </div>
    );
  }
}


const Proj4 = () => {
  return (
    <div>
      < Timer />
    </div>
  );
};

export default Proj4;