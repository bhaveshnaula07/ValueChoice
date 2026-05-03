import { useState, useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";
import { Plus, X } from "lucide-react";

function OptionForm() {
  const [option, setOption] = useState("");
  const { options, addOption, removeOption } = useContext(DecisionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!option.trim()) return;
    addOption(option.trim());
    setOption("");
  };

  return (
    <div className="form-box">
      <h2>Add Options</h2>

      <form onSubmit={handleSubmit} className="form-inline">
        <input
          type="text"
          placeholder="Enter option..."
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          <Plus size={18} /> Add
        </button>
      </form>

      <div className="list-box">
        {options.map((item, index) => (
          <div key={index} className="list-item">
            <span className="list-item-name">{item}</span>
            <button
              type="button"
              className="icon-btn remove-btn"
              onClick={() => removeOption(index)}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionForm;
