import React from "react";

const Changelog = ({ language }) => {
  return (
    <div className="changelog container" id="">
      <div className="changelog__inside container__inside">
        <h1>Changelog</h1>
        <ul>
          <li>27th August 2021</li>
          <li>New donate$ box added.</li>
        </ul>
        <ul>
          <li>16th August 2021</li>
          <li>
            Handicap rounding problem fixed where it rounded down when it should
            round up at ".5". Thank you Dieter for pointing the error out.
          </li>
        </ul>
        <ul>
          <li>25th June 2021</li>
          <li>
            Handicap calculation bug fixed where 10 decimals after the dot
            appeared
          </li>
          <li>List is now ordered in reverse. Newest score on top</li>
          <li>
            List doesnt cut scores when you enter more than 20 but of course
            only uses the last 20 scores for calculation
          </li>
        </ul>
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
