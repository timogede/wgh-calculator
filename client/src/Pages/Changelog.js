import React from "react";

const Changelog = ({ language }) => {
  return (
    <div className="changelog container" id="">
      <div className="changelog__inside container__inside">
        <h1>Changelog</h1>
        <ul>
          <li>1st June 2021</li>
          <li>Added changelog</li>
          <li>Handicap adjustment added</li>
          <li>
            Handicap is now calculated correctly for less than 20 entered scores
          </li>
          <li>Expanded FAQ section</li>
        </ul>
        <ul>
          <li>28th May 2021</li>
          <li>Expanded FAQ section</li>
          <li>New empty state photo</li>
        </ul>
        <ul>
          <li>9th January 2021</li>
          <li>Launch of handicap.report</li>
        </ul>
      </div>
    </div>
  );
};

export default Changelog;
