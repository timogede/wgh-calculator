import React from "react";
import logo from "../images/logo.svg";

const MyHeader = ({language}) => {

const toggleFunction = (e) => {
  const myBody = document.getElementsByTagName("body")[0];
if(myBody.classList.contains("toggle")){
  myBody.classList.remove("toggle");
}else{
    myBody.classList.add("toggle");
}

}

  return (
    <header id="masthead" class="header container">
      <div class="header__inside container__inside">
      <div class="header__branding">
        <img src={logo} alt="handicap.report Logo" />
      </div>

      <div class="header__navigation__wrap">

      <div class="header__bg"></div>
      <div class="header__navigation__mobile">
  MENU MOBILE
      </div>


    </div>
      <button onClick={toggleFunction} class="header__navigation-toggle">
          <span class="header__navigation-toggle__bar"></span>
          <span class="header__navigation-toggle__bar"></span>
      </button>


</div>


    </header>
  );
};

export default MyHeader;
