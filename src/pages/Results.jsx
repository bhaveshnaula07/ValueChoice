import { useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";
import Recommendation from "../components/Recommendation";
import ProsConsChart from "../components/ProsConsChart";

function Results() {
  const { result } = useContext(DecisionContext);

  if (!result) {
    return (
      <div className="home-container">
        <h2>No Result Found</h2>
        <p>Please add options, factors, and scores first.</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1>Decision Result</h1>

      <Recommendation />

      <ProsConsChart />
    </div>
  );
}

export default Results;