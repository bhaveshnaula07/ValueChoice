import { Trash2 } from "lucide-react";

function DecisionCard({ decision, onDelete }) {
  const { options, factors, result, decisionName = "Untitled Decision" } = decision;

  return (
    <div className="decision-card">
      <div className="card-header">
        <h3>{decisionName}</h3>
        <small className="date-text">ID: {decision.id}</small>
        <button className="icon-btn delete-btn" onClick={() => onDelete(decision.id)}>
          <Trash2 size={18} />
        </button>
      </div>

      <div className="card-content">
        <div className="card-section">
          <h4>Options</h4>
          <div className="tag-list">
            {options.map((opt, idx) => (
              <span key={idx} className="tag option-tag">{opt}</span>
            ))}
          </div>
        </div>

        <div className="card-section">
          <h4>Factors</h4>
          <div className="tag-list">
            {factors.map((fac, idx) => (
              <span key={idx} className="tag factor-tag">{fac}</span>
            ))}
          </div>
        </div>

        {result && (
          <div className="result-section">
            <h4>Best Choice</h4>
            <p className="best-option">{result.bestOption}</p>
            <p className="score-text">Score: {result.highestScore}</p>
          </div>
        )}
      </div>

      <div className="card-footer">
        <p className="date-text">{new Date(decision.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default DecisionCard;

