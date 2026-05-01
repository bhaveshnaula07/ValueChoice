import { useState, useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";

function OptionForm() {
  const [option, setOption] = useState("");
  const { options, addOption } = useContext(DecisionContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (option.trim() === "") return;

    addOption(option);
    setOption("");
  };

  return (
    <div className="form-box">
      <h2>Add Options</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter option..."
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div className="list-box">
        {options.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default OptionForm;