import React from "react";


const Result = ({averageScoreDifferential, allScoreDifferentials, averageScore, todos, setAllScores, allScores, amountOfScores, setAmountOfScores}) => {

  return (
    <div>
      <h2>average Score:</h2>
    <h1>{averageScore}</h1>
  <h2>average score Differential:</h2>
<h1>{averageScoreDifferential}</h1>

      </div>
  );
};

export default Result;
