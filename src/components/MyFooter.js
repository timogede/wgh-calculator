import React from "react";
import { ReactComponent as TeeSvg } from "../images/tee.svg";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Home from "../Pages/Home";
import Impressum from "../Pages/Impressum";
import Datenschutz from "../Pages/Datenschutz";

const MyFooter = () => {

  const scrollWidthOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -70;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (

    <React.Fragment>
    <div className="myfooter container">
      <div className="myfooter__inside container__inside">
      <ul>
        <li><HashLink smooth to="/#">Handicap berechnen</HashLink></li>
        <li><HashLink smooth to="/#faq" scroll={scrollWidthOffset}>FAQ</HashLink></li>
        <li><HashLink smooth to="/#support" scroll={scrollWidthOffset}>Unterstützen</HashLink></li>
        <li><HashLink smooth to="/datenschutz" href="datenschutz">Datenschutz</HashLink></li>
        <li><HashLink smooth to="/impressum">Impressum</HashLink></li>
        </ul>
        <p>Mit <i className="fa fa-heart"></i> programmiert<br />von <a target="_blank" href="https://instagram.com/timo_gd">Timo Gede</a></p>

    </div>
    </div>
    </React.Fragment>


  );
};

export default MyFooter;
