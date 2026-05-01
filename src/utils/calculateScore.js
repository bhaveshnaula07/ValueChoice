function calculateScore(options, factors, scores) {
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

  return {
    bestOption,
    highestScore,
    allResults,
  };
}

export default calculateScore;