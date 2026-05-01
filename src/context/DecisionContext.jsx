import { createContext, useState } from "react";

export const DecisionContext = createContext();

export const DecisionProvider = ({ children }) => {
  const [options, setOptions] = useState([]);
  const [factors, setFactors] = useState([]);
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

  // Add option
  const addOption = (option) => {
    setOptions([...options, option]);
  };

 
  const addFactor = (factor) => {
    setFactors([...factors, factor]);
  };

  // Save score
  const addScore = (option, factor, value) => {
    setScores({
      ...scores,
      [`${option}-${factor}`]: value,
    });
  };

  return (
    <DecisionContext.Provider
      value={{
        options,
        setOptions,
        factors,
        setFactors,
        scores,
        setScores,
        result,
        setResult,
        addOption,
        addFactor,
        addScore,
      }}
    >
      {children}
    </DecisionContext.Provider>
  );
};