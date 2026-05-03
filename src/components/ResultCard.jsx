import { useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";
import { Trophy, Star, CheckCircle } from "lucide-react";

function ResultCard({ option, score, rank }) {
  const isWinner = rank === 1;
  const isSecond = rank === 2;
  const isThird = rank === 3;

  const getRankClass = () => {
    if (isWinner) return "rank-gold";
    if (isSecond) return "rank-silver";
    if (isThird) return "rank-bronze";
    return "rank-normal";
  };

  const getRankIcon = () => {
    if (isWinner) return <Trophy size={24} />;
    if (isSecond) return <Star size={20} />;
    if (isThird) return <Star size={18} />;
    return null;
  };

  return (
    <div className={`result-card ${getRankClass()}`}>
      <div className="rank-badge">
        {getRankIcon()}
        <span className="rank-number">#{rank}</span>
      </div>
      
      <div className="result-content">
        <h3 className="option-name">{option}</h3>
        <div className="score-display">
          <span className="score-value">{score}</span>
          <span className="score-label">points</span>
        </div>
      </div>
      
      {isWinner && (
        <div className="winner-badge">
          <CheckCircle size={16} /> Best Choice
        </div>
      )}
    </div>
  );
}

export default ResultCard;
