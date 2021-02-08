import React from "react";

const Result = ({
  averageSlope,
  averageCr,
  theHandicap,
  averageScoreDifferential,
  allScoreDifferentials,
  averageScore,
  todos,
  setAllScores,
  allScores,
  amountOfScores,
  setAmountOfScores,
}) => {
  const boxToggler = () => {
    const toggleElement = document.getElementById("result__more-box");
    const changeElement = toggleElement.getElementsByTagName("button")[0];
    if (toggleElement.classList.contains("toggle-open")) {
      toggleElement.classList.remove("toggle-open");
      changeElement.innerHTML =
        '<i className="fas fa-plus" aria-hidden="true"></i> mehr';
    } else {
      toggleElement.classList.add("toggle-open");
      changeElement.innerHTML =
        '<i className="fas fa-minus" aria-hidden="true"></i> weniger';
    }
  };

  return (
    <React.Fragment>
      <div className="result container">
        <div className="result__inside container__inside">
          <h2>Dein Handicap:</h2>
          <p className="result__handicap">{theHandicap}</p>
          <div className="result__more-box" id="result__more-box">
            <button onClick={boxToggler}>
              <i className="fas fa-plus"></i> mehr
            </button>
            <div className="result__averages__wrap">
              <div className="result__averages__box">
                <p>Ø SD</p>
                <h3>{averageScoreDifferential}</h3>
              </div>
              <div className="result__averages__box">
                <p>Ø Score</p>
                <h3>{averageScore}</h3>
              </div>
              <div className="result__averages__box">
                <p>Ø CR</p>
                <h3>{averageCr}</h3>
              </div>
              <div className="result__averages__box">
                <p>Ø Slope</p>
                <h3>{averageSlope}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Result;
