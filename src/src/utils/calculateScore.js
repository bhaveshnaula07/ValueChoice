function calculateScore(options, factors, scores) {
  // Validate inputs
  if (!options || options.length === 0 || !factors || factors.length === 0 || !scores) {
    return {
      bestOption: "",
      highestScore: 0,
      allResults: [],
    };
  }

  let bestOption = "";
  let highestScore = 0;
  let allResults = [];

  options.forEach((option) => {
    let total = 0;

    factors.forEach((factor) => {
      const value = scores[`${option}-${factor}`] || 0;
      total += value;
    });

    allResults.push({
      option: option,
      score: total,
    });

    if (total > highestScore) {
      highestScore = total;
      bestOption = option;
    }
  });

  // Only return valid results if there's actual data
  if (allResults.length === 0 || highestScore === 0) {
    return {
      bestOption: "",
      highestScore: 0,
      allResults: [],
    };
  }

  return {
    bestOption,
    highestScore,
    allResults,
  };
}

export default calculateScore;