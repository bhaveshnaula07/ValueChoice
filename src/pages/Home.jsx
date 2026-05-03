import { useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";
import OptionForm from "../components/OptionForm";
import FactorForm from "../components/FactorForm";
import ScoreMatrix from "../components/ScoreMatrix";

function Home() {
  const { decisionName, setDecisionName } = useContext(DecisionContext);

  return (
    <div className="home-container">
      <h1>Choose Your Best Decision</h1>
      <p>Add your options, factors, and scores to get the best suggestion.</p>

      <div className="form-box">
        <h2>Decision Name</h2>
        <div className="form-group">
          <label htmlFor="decisionName">What decision are you making?</label>
          <input
            id="decisionName"
            type="text"
            placeholder="e.g., Buy a car, Choose college, etc."
            value={decisionName}
            onChange={(e) => setDecisionName(e.target.value)}
            className="name-input"
          />
        </div>
      </div>

      <OptionForm />
      <FactorForm />
      <ScoreMatrix />
    </div>
  );
}

export default Home;

