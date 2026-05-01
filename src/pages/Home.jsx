import OptionForm from "../components/OptionForm";
import FactorForm from "../components/FactorForm";
import ScoreMatrix from "../components/ScoreMatrix";

function Home() {
  return (
    <div className="home-container">
      <h1>Choose Your Best Decision</h1>
      <p>Add your options, factors, and scores to get the best suggestion.</p>

      <OptionForm />
      <FactorForm />
      <ScoreMatrix />
    </div>
  );
}

export default Home;