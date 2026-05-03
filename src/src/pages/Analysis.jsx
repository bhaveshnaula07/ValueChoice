import { useContext } from "react";
import { Link } from "react-router-dom";
import { DecisionContext } from "../context/DecisionContext";
import { BarChart2, HelpCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Analysis() {
  const { options, factors, scores, result } = useContext(DecisionContext);

  if (!result || !options.length || !factors.length) {
    return (
      <div className="analysis-container">
        <div className="empty-state">
          <HelpCircle size={64} />
          <h2>No Data to Analyze</h2>
          <p>Add options, factors, and scores first to see analysis.</p>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  const optionAverages = options.map((option) => {
    const total = factors.reduce(
      (sum, factor) => sum + (scores[`${option}-${factor}`] || 0),
      0
    );
    return { option, average: Number((total / factors.length).toFixed(1)) };
  });

  const factorTotals = factors
    .map((factor) => ({
      factor,
      total: options.reduce(
        (sum, option) => sum + (scores[`${option}-${factor}`] || 0),
        0
      ),
    }))
    .sort((a, b) => b.total - a.total);

  return (
    <div className="analysis-container">
      <h1>
        <BarChart2 size={28} /> Decision Analysis
      </h1>

      <div className="analysis-grid">
        <div className="analysis-card">
          <h3>Option Averages</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={optionAverages} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="option" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="average" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="analysis-card">
          <h3>Factor Totals</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={factorTotals} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="factor" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="analysis-card insights">
          <h3>Key Insights</h3>
          <p><strong>Best Option:</strong> {result.bestOption}</p>
          <p><strong>Total Score:</strong> {result.highestScore}</p>
          <p><strong>Top Factor:</strong> {factorTotals[0]?.factor || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
