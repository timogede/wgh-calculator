import React from "react";
import { ReactComponent as TeeSvg } from "../images/tee.svg";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "../Pages/Home";
import Impressum from "../Pages/Impressum";
import Datenschutz from "../Pages/Datenschutz";

const MyFooter = () => {


  return (
  
    <React.Fragment>
    <div className="site-footer container">
      <div className="site-footer__inside container__inside">
      <ul>
        <li><Link to="/">Startseite</Link></li>
        <li><Link to="/datenschutz" href="datenschutz">Datenschutz</Link></li>
          <li><Link to="/impressum">Impressum</Link></li>
        </ul>
        <p>Mit <i className="fa fa-heart"></i> programmiert<br />von <a href="https://instagram.com/timo_gd">Timo Gede</a></p>

    </div>
    </div>
    </React.Fragment>


  );
};

export default MyFooter;
