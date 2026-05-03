import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, Clock, Trophy } from "lucide-react";

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Trophy className="brand-icon" size={28} />
        <h1 className="brand-title">ValueChoice</h1>
      </div>

      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive("/")}`}>
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/results" className={`nav-link ${isActive("/results")}`}>
          <Trophy size={20} />
          <span>Results</span>
        </Link>
        <Link to="/analysis" className={`nav-link ${isActive("/analysis")}`}>
          <BarChart2 size={20} />
          <span>Analysis</span>
        </Link>
        <Link to="/history" className={`nav-link ${isActive("/history")}`}>
          <Clock size={20} />
          <span>History</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
