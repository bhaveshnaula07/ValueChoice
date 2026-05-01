import { useState, useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";

function FactorForm() {
  const [factor, setFactor] = useState("");
  const { factors, addFactor } = useContext(DecisionContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (factor.trim() === "") return;

    addFactor(factor);
    setFactor("");
  };

  return (
    <div className="form-box">
      <h2>Add Decision Factors</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter factor..."
          value={factor}
          onChange={(e) => setFactor(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div className="list-box">
        {factors.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default FactorForm;