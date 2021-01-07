import React from "react";


const Result = ({theHandicap, averageScoreDifferential, allScoreDifferentials, averageScore, todos, setAllScores, allScores, amountOfScores, setAmountOfScores}) => {

  return (
    <React.Fragment>
      <h2>average Score:</h2>
    <h1>{averageScore}</h1>
  <h2>average score Differential:</h2>
<h1>{averageScoreDifferential}</h1>
<h2>Your Handicap:</h2>
<h1>{theHandicap}</h1>
      </React.Fragment>
  );
};

export default Result;
