import { useContext } from "react";
import { Link } from "react-router-dom";
import { DecisionContext } from "../context/DecisionContext";
import Recommendation from "../components/Recommendation";
import { AlertCircle } from "lucide-react";

function Results() {
  const { result } = useContext(DecisionContext);

  if (!result || !result.bestOption) {
    return (
      <div className="home-container">
        <div className="empty-state">
          <AlertCircle size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
          <h2>No Result Found</h2>
          <p>Please add options, factors, and scores first.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1>Decision Result</h1>
      <Recommendation />
    </div>
  );
}

export default Results;

