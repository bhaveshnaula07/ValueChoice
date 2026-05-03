import { useState, useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";
import { Plus, X } from "lucide-react";

function FactorForm() {
  const [factor, setFactor] = useState("");
  const { factors, addFactor, removeFactor } = useContext(DecisionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!factor.trim()) return;
    addFactor(factor.trim());
    setFactor("");
  };

  return (
    <div className="form-box">
      <h2>Add Decision Factors</h2>

      <form onSubmit={handleSubmit} className="form-inline">
        <input
          type="text"
          placeholder="Enter factor..."
          value={factor}
          onChange={(e) => setFactor(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          <Plus size={18} /> Add
        </button>
      </form>

      <div className="list-box">
        {factors.map((item, index) => (
          <div key={index} className="list-item">
            <span className="list-item-name">{item}</span>
            <button
              type="button"
              className="icon-btn remove-btn"
              onClick={() => removeFactor(index)}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FactorForm;
