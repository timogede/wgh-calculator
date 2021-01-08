import React from "react";
import logo from "../images/logo.svg";
import tee from "../images/tee.svg";
import { ReactComponent as TeeSvg } from "../images/tee.svg";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "../Pages/Home";
import Impressum from "../Pages/Impressum";
import Datenschutz from "../Pages/Datenschutz";
const MyHeader = ({language}) => {

const toggleFunction = (e) => {
  const myBody = document.getElementsByTagName("body")[0];
if(myBody.classList.contains("header__navigation__mobile-toggle--open")){
  myBody.classList.remove("header__navigation__mobile-toggle--open");
}else{
    myBody.classList.add("header__navigation__mobile-toggle--open");
}

}

const closeFunction = (e) => {
  const myBody = document.getElementsByTagName("body")[0];

  myBody.classList.remove("header__navigation__mobile-toggle--open");


}

  return (

    <React.Fragment>
    <header id="masthead" className="header container">
      <div className="header__inside container__inside">
      <div className="header__branding">
        <Link to="/"><img src={logo} alt="handicap.report Logo" /></Link>
      </div>

      <div className="header__navigation__wrap">

      <div className="header__bg"></div>
      <div className="header__navigation__mobile">
        <div className="menu-mobile-container">
        <ul onClick={ closeFunction } className="menu" id="menu-mobile">
        <li className="menu-item"><Link to="/#handicap"><i className="fas fa-chart-line"></i>Handicap</Link></li>
        <li className="menu-item"><Link to="/#faq"><i className="fas fa-question"></i>FAQ</Link></li>
        <li className="menu-item"><Link to="/#support"><i className="fas fa-hands-helping"></i>Unterstützen</Link></li>
        <li className="menu-item"><Link to="/impressum"><i className="fas fa-stamp"></i>Impressum</Link></li>
        <li className="menu-item"><Link to="/datenschutz"><i className="fas fa-cookie"></i>Datenschutz</Link></li>
        </ul>
        </div>
      </div>


    </div>
      <button onClick={toggleFunction} className="header__navigation-toggle">
           <span className="header__navigation-toggle__bar"><TeeSvg/></span>
                <span className="header__navigation-toggle__bar"><TeeSvg/></span>

      </button>


</div>


    </header>
    <div className="header__spacer" style={{height: "95px"}}>
    &nbsp;
</div>
    </React.Fragment>

  );
};

export default MyHeader;
