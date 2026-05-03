import { createContext, useState, useEffect } from "react";

export const DecisionContext = createContext();

export const DecisionProvider = ({ children }) => {
  const [decisionName, setDecisionName] = useState('');
  const [options, setOptions] = useState([]);
  const [factors, setFactors] = useState([]);
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("decisionHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem("decisionHistory", JSON.stringify(history));
  }, [history]);

  // Add option
  const addOption = (option) => {
    setOptions((prev) => [...prev, option]);
  };

  // Remove option
  const removeOption = (indexToRemove) => {
    setOptions((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // Add factor
  const addFactor = (factor) => {
    setFactors((prev) => [...prev, factor]);
  };

  // Remove factor
  const removeFactor = (indexToRemove) => {
    setFactors((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // Add score
  const addScore = (option, factor, value) => {
    setScores((prev) => ({
      ...prev,
      [`${option}-${factor}`]: value,
    }));
  };

  // Save current decision to history
  const saveToHistory = (newResult) => {
    const resultToSave = newResult || result;
    if (resultToSave && options.length > 0) {
      const newEntry = {
        id: Date.now(),
        decisionName,
        options: [...options],
        factors: [...factors],
        scores: { ...scores },
        result: { ...resultToSave },
        date: new Date().toISOString(),
      };
      setHistory((prev) => [newEntry, ...prev]);
    }
  };

  // Clear current decision
  const clearDecision = () => {
    setOptions([]);
    setFactors([]);
    setScores({});
    setResult(null);
    setDecisionName('');
  };

  return (
    <DecisionContext.Provider
      value={{
        decisionName,
        setDecisionName,
        options,
        setOptions,
        factors,
        setFactors,
        scores,
        setScores,
        result,
        setResult,
        history,
        setHistory,
        addOption,
        removeOption,
        addFactor,
        removeFactor,
        addScore,
        saveToHistory,
        clearDecision,
      }}
    >
      {children}
    </DecisionContext.Provider>
  );
};

