import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Decision Making Assistant</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/results">Results</Link>
      </div>
    </nav>
  );
}

export default Navbar;