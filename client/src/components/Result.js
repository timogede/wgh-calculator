import React from "react";
import { HashLink } from "react-router-hash-link";

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
  adjustment,
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

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const openElement = (e) => {
    const clickedId = e.target.id;
    if (clickedId === "faq-score-trigger") {
      document.getElementById("faq-score").classList.add("active");
    }
    if (clickedId === "faq-cr-trigger") {
      document.getElementById("faq-cr").classList.add("active");
    }
    if (clickedId === "faq-slope-trigger") {
      console.log("asdasda");
      document.getElementById("faq-slope").classList.add("active");
    }
    if (clickedId === "result__adjustment-trigger") {
      console.log("asdasda");
      document.getElementById("faq-adjustment").classList.add("active");
    }
  };

  return (
    <React.Fragment>
      <div className="result container">
        <div className="result__inside container__inside">
          <h2>Dein Handicap:</h2>
          <p className="result__handicap">{theHandicap}</p>
          {adjustment > 0 && (
            <>
              <h2>
                HCP-Anpassung: -{adjustment}
                <span>
                  <HashLink
                    scroll={scrollWidthOffset}
                    smooth
                    onClick={openElement}
                    to="/#faq-adjustment"
                    id="myform__cr-trigger"
                  >
                    <i
                      id="result__adjustment-trigger"
                      className="fas fa-info-circle"
                    ></i>
                  </HashLink>
                </span>
              </h2>
            </>
          )}
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
