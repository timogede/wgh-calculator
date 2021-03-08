import React from "react";
import logo from "../images/logo.svg";
import { ReactComponent as TeeSvg } from "../images/tee.svg";
import { HashLink } from "react-router-hash-link";
import { useSelector, useDispatch } from "react-redux";
const MyHeader = ({ language }) => {
  const isLogged = useSelector((state) => state.loggedReducer);
  const toggleFunction = (e) => {
    const myBody = document.getElementsByTagName("body")[0];
    if (myBody.classList.contains("header__navigation__mobile-toggle--open")) {
      myBody.classList.remove("header__navigation__mobile-toggle--open");
    } else {
      myBody.classList.add("header__navigation__mobile-toggle--open");
    }
  };

  const closeFunction = (e) => {
    const myBody = document.getElementsByTagName("body")[0];

    myBody.classList.remove("header__navigation__mobile-toggle--open");
  };

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <header id="masthead" className="header container">
        <div className="header__inside container__inside">
          <div className="header__branding" onClick={closeFunction}>
            <HashLink smooth to="/#" scroll={scrollWidthOffset}>
              <img src={logo} alt="handicap.report Logo" />
            </HashLink>
          </div>

          <div className="header__navigation__wrap">
            <div className="header__bg"></div>
            <div className="header__navigation__mobile">
              <div className="menu-mobile-container">
                <ul onClick={closeFunction} className="menu" id="menu-mobile">
                  <li className="menu-item">
                    <HashLink smooth to="/">
                      <i className="fas fa-chart-line"></i>Handicap
                    </HashLink>
                  </li>
                  <li className="menu-item">
                    <HashLink smooth to="/#faq" scroll={scrollWidthOffset}>
                      <i className="fas fa-question"></i>FAQ
                    </HashLink>
                  </li>
                  <li className="menu-item">
                    <HashLink smooth to="/#support" scroll={scrollWidthOffset}>
                      <i className="fas fa-hands-helping"></i>Unterstützen
                    </HashLink>
                  </li>
                  {!isLogged ? (
                    <>
                      <li className="menu-item">
                        <HashLink smooth to="/anmelden">
                          <i className="fas fa-sign-in-alt"></i>Login
                        </HashLink>
                      </li>

                      <li className="menu-item">
                        <HashLink smooth to="/registrieren">
                          <i className="fas fa-user-plus"></i>Registrieren
                        </HashLink>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}

                  <li className="menu-item">
                    <HashLink smooth to="/account">
                      <i className="fas fa-user"></i>Account
                    </HashLink>
                  </li>
                  <li className="menu-item">
                    <HashLink smooth to="/impressum">
                      <i className="fas fa-stamp"></i>Impressum
                    </HashLink>
                  </li>
                  <li className="menu-item">
                    <HashLink smooth to="/datenschutz">
                      <i className="fas fa-cookie"></i>Datenschutz
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            onClick={toggleFunction}
            className="header__navigation-toggle"
          >
            <span className="header__navigation-toggle__bar">
              <TeeSvg />
            </span>
            <span className="header__navigation-toggle__bar">
              <TeeSvg />
            </span>
          </button>
        </div>
      </header>
      <div className="header__spacer" style={{ height: "95px" }}>
        &nbsp;
      </div>
    </React.Fragment>
  );
};

export default MyHeader;
