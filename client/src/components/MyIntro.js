import React from "react";

const MyIntro = ({ language }) => {
  return (
    <div className="intro container" id="handicap">
      <div className="intro__inside container__inside">
        <span>handicap.report</span>
        <h1>Handicap berechnen</h1>
        <h2>
          Einfach gespielte Runden eingeben und sofort dein neues Handicap
          erhalten.
        </h2>
        <p>
          handicap.report ist die einzige Seite in 2025, die dir <b>sofort </b>
          dein neues Handicap anzeigt.
        </p>
      </div>
    </div>
  );
};

export default MyIntro;
