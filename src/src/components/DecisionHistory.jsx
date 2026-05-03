import { useContext } from "react";
import { Link } from "react-router-dom";
import { DecisionContext } from "../context/DecisionContext";
import DecisionCard from "./DecisionCard";
import { Clock, TrendingUp } from "lucide-react";

function DecisionHistory() {
  const { history, setHistory } = useContext(DecisionContext);

  const handleDelete = (id) => {
    const updated = history.filter((d) => d.id !== id);
    setHistory(updated);
    localStorage.setItem("decisionHistory", JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (confirm("Clear all saved decisions?")) {
      setHistory([]);
      localStorage.removeItem("decisionHistory");
    }
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <h1><Clock size={28} /> Decision History</h1>
        <button className="btn-secondary" onClick={handleClearAll}>
          Clear All
        </button>
      </div>

      {history.length === 0 ? (
        <div className="empty-state">
          <TrendingUp size={64} className="empty-icon" />
          <h2>No Decisions Yet</h2>
          <p>Start making a decision to save it here.</p>
          <Link to="/" className="btn btn-primary">
            Make a Decision
          </Link>
        </div>
      ) : (
        <div className="history-grid">
          {history.map((decision) => (
            <DecisionCard
              key={decision.id}
              decision={decision}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DecisionHistory;
