import { useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";

function Recommendation() {
  const { result } = useContext(DecisionContext);

  return (
    <div className="result-box">
      <h2>Best Choice</h2>

      <h1>{result.bestOption}</h1>

      <p>Total Score: {result.highestScore}</p>

      <div className="all-results">
        <h3>All Scores</h3>

        {result.allResults.map((item, index) => (
          <p key={index}>
            {item.option} : {item.score}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;