import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DecisionContext } from "../context/DecisionContext";
import calculateScore from "../utils/calculateScore";

function ScoreMatrix() {
  const { options, factors, addScore, scores, setResult } =
    useContext(DecisionContext);

  const navigate = useNavigate();

  const handleChange = (option, factor, value) => {
    addScore(option, factor, Number(value));
  };

  const handleResult = () => {
    const result = calculateScore(options, factors, scores);
    setResult(result);
    navigate("/results");
  };

  if (options.length === 0 || factors.length === 0) {
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
                onChange={(e) =>
                  handleChange(option, factor, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleResult}>Get Best Decision</button>
    </div>
  );
}

export default ScoreMatrix;