import React from "react";


const Result = ({todos, setAllScores, allScores, amountOfScores, setAmountOfScores}) => {
  setAmountOfScores(Object.keys(todos).length);
  return (
    <div>
    <h2>all scores combined:</h2>
    <h1>{amountOfScores}</h1>
      </div>
  );
};

export default Result;
