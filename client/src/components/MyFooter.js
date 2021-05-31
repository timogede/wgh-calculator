import React from "react";
import { HashLink } from "react-router-hash-link";

const MyFooter = () => {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className="myfooter container">
        <div className="myfooter__inside container__inside">
          <ul>
            <li>
              <HashLink smooth to="/#">
                Handicap berechnen
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#faq" scroll={scrollWidthOffset}>
                FAQ
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#support" scroll={scrollWidthOffset}>
                Unterstützen
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/changelog" href="changelog">
                Changelog
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/datenschutz" href="datenschutz">
                Datenschutz
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/impressum">
                Impressum
              </HashLink>
            </li>
          </ul>
          <p>
            Mit <i className="fa fa-heart"></i> programmiert
            <br />
            von{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/timo_gd"
            >
              Timo Gede
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyFooter;
