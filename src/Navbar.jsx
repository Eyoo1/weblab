import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FitBook</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/trainers">Trainers</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
      </ul>

      <button className="signup-btn">Sign Up</button>
    </nav>
  );
}

export default Navbar;


