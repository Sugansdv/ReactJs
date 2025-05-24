import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Task from './components/Task';
import Proj1 from './components/Proj1';
import Proj2 from './components/Proj2';
import Proj3 from './components/Proj3';
import Proj4 from './components/Proj4';
import './App.css';

function Timer() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="container">
      <h1></h1>
      <button className="timer-btn" onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide' : 'Show'} Timer
      </button>
      {showTimer && <Proj3 />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Day9 />} />
            <Route path="/Task" element={<Task />} />
            <Route path="/Proj1" element={<Proj1 />} />
            <Route path="/Proj2" element={<Proj2 />} />
            <Route path="/Proj3" element={<Timer />} />
            <Route path="/Proj4" element={<Proj4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Day9() {
  return (
    <div>
      <h1 className="hero-text">Day 9 - React Fragment & Keys<br /><br />
        Task and Mini Project
      </h1>
    </div>
  );
}

export default App;
