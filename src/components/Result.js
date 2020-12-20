import React from "react";


const Result = ({allScoreDifferentials, averageScore, todos, setAllScores, allScores, amountOfScores, setAmountOfScores}) => {

  return (
    <div>
    <h2>how many scores:</h2>
    <h1>{amountOfScores}</h1>
    <h2>all scores combined:</h2>
    <h1>{allScores}</h1>
      <h2>average Score:</h2>
    <h1>{averageScore}</h1>
    <h2>all score Differentials:</h2>
  <h1>{allScoreDifferentials}</h1>
      </div>
  );
};

export default Result;
