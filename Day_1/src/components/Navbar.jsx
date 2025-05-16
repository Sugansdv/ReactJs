import { NavLink } from 'react-router-dom';
import '../assets/Css/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo-text">Day_1</NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Task">Tasks</NavLink></li>
        <li><NavLink to="/Proj1">Project 1</NavLink></li>
        <li><NavLink to="/Proj2">Project 2</NavLink></li>
        <li><NavLink to="/Proj3">Project 3</NavLink></li>
        <li><NavLink to="/Proj4">Project 4</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
