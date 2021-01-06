import React from "react";
import logo from "../images/logo.svg";
import tee from "../images/tee.svg";
import { ReactComponent as TeeSvg } from "../images/tee.svg";
const MyHeader = ({language}) => {

const toggleFunction = (e) => {
  const myBody = document.getElementsByTagName("body")[0];
if(myBody.classList.contains("header__navigation__mobile-toggle--open")){
  myBody.classList.remove("header__navigation__mobile-toggle--open");
}else{
    myBody.classList.add("header__navigation__mobile-toggle--open");
}

}

  return (
    <React.Fragment>
    <header id="masthead" class="header container">
      <div class="header__inside container__inside">
      <div class="header__branding">
        <a href="/"><img src={logo} alt="handicap.report Logo" /></a>
      </div>

      <div class="header__navigation__wrap">

      <div class="header__bg"></div>
      <div class="header__navigation__mobile">
        <div class="menu-mobile-container">
        <ul class="menu" id="menu-mobile">
        <li class="menu-item"><a href="/#handicap"><i class="fas fa-chart-line"></i>Handicap</a></li>
        <li class="menu-item"><a href="/#faq"><i class="fas fa-question"></i>FAQ</a></li>
        <li class="menu-item"><a href="/#support"><i class="fas fa-hands-helping"></i>Unterstützen</a></li>
        <li class="menu-item"><a href="/impressum"><i class="fas fa-stamp"></i>Impressum</a></li>
        <li class="menu-item"><a href="/datenschutz"><i class="fas fa-cookie"></i>Datenschutz</a></li>
        </ul>
        </div>
      </div>


    </div>
      <button onClick={toggleFunction} class="header__navigation-toggle">
  {/*
           <span class="header__navigation-toggle__bar"></span>
           <span class="header__navigation-toggle__bar"></span>
           */}

           <span class="header__navigation-toggle__bar"><TeeSvg/></span>
                <span class="header__navigation-toggle__bar"><TeeSvg/></span>

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
