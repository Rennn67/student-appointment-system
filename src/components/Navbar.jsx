import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <h2>Student Appointment Scheduling System</h2>
            </div>
            <ul className="nav-links">
                <Link to="/">HOME</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/register">SIGN UP</Link>
            </ul>
        </nav>
    )
}
export default Navbar;