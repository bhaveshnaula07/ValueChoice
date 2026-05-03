import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DecisionContext } from "../context/DecisionContext";
import calculateScore from "../utils/calculateScore";

function ScoreMatrix() {
  const { options, factors, addScore, scores, setResult, saveToHistory } =
    useContext(DecisionContext);

  const navigate = useNavigate();

  const handleChange = (option, factor, value) => {
    addScore(option, factor, Number(value));
  };

  const handleResult = () => {
    const hasAnyScore = options.some((option) =>
      factors.some((factor) => scores[`${option}-${factor}`] > 0)
    );

    if (!hasAnyScore) {
      alert("Enter at least one score between 1 and 10.");
      return;
    }

    const result = calculateScore(options, factors, scores);
    if (!result.bestOption) {
      alert("Enter valid scores for your options and factors.");
      return;
    }

    setResult(result);
    saveToHistory(result);
    navigate("/results");
  };

  if (!options.length || !factors.length) {
    return (
      <div className="form-box">
        <h2>Add options and factors first</h2>
      </div>
    );
  }

  return (
    <div className="form-box">
      <h2>Give Scores (1 - 10)</h2>

      {options.map((option) => (
        <div key={option} className="score-box">
          <h3>{option}</h3>

          {factors.map((factor) => (
            <div key={factor} className="score-input">
              <label>{factor}</label>

              <input
                type="number"
                min="1"
                max="10"
                value={scores[`${option}-${factor}`] || ""}
                onChange={(e) =>
                  handleChange(option, factor, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      ))}

      <button className="btn btn-primary" onClick={handleResult}>Get Best Decision</button>
    </div>
  );
}

export default ScoreMatrix;
