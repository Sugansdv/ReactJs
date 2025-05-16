import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Task from './components/Task';
import Proj1 from './components/Proj1';
import Proj2 from './components/Proj2';
import Proj3 from './components/Proj3';
import Proj4 from './components/Proj4';
import './App.css';




function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Day4 />} />
            <Route path="/Task" element={<Task />} />
            <Route path="/Proj1" element={<Proj1 />} />
            <Route path="/Proj2" element={<Proj2 />} />
            <Route path="/Proj3" element={<Proj3 />} />
            <Route path="/Proj4" element={<Proj4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Day4() {
  return (
    <div>
      <h1 className="hero-text">Day 4 Task and Mini Project</h1>
    </div>
  );
}

export default App;