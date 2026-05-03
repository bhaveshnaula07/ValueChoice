import { useContext } from "react";
import { DecisionContext } from "../context/DecisionContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function ProsConsChart() {
  const { result } = useContext(DecisionContext);

  return (
    <div className="chart-box">
      <h2>Score Comparison Chart</h2>

      <BarChart width={500} height={300} data={result.allResults}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="option" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="score" />
      </BarChart>
    </div>
  );
}

export default ProsConsChart;