import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";

const VerifyAccount = ({ language }) => {
  const [verifyState, setVerifyState] = useState("");
  const getVerify = async () => {
    const link = window.location.pathname.split("/");
    const userID = link[link.length - 2];
    const token = link[link.length - 1];

    axios
      .get("http://localhost:3333/user/verify/" + userID + "/" + token)
      .then((response) => {
        console.log(response.data);
        if (response.data == "all good!") {
          console.log("test1");
          setVerifyState("all good!");
        }
      })
      .catch((error) => {
        console.log("error: " + error.response.data);

        if (error.response.data == "novalid_objectid") {
          console.log("test2");
          setVerifyState("novalid_objectid");
        }
        if (error.response.data == "missing_userid") {
          console.log("test3");
          setVerifyState("missing_userid");
        }
        if (error.response.data == "token is not correct hacker!") {
          console.log("test4");
          setVerifyState("token is not correct hacker!");
        }
        if (error.response.data == "user already activated") {
          console.log("test5");
          setVerifyState("user already activated");
        }
      });
  };
  getVerify();

  if (verifyState == "all good!") {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <i className="fas fa-check"></i>
            <i className="fas fa-check sucess"></i>
            <h1>E-Mail ist nun aktiviert!</h1>
            <HashLink to="/" className="btn btn-primary">
              Handicap berechnen
            </HashLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
  if (verifyState == "token is not correct hacker!") {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <i className="fas fa-times-octagon failure"></i>
            <h1>Token ist nicht gültig, du Hacker!</h1>
            <HashLink to="/" className="btn btn-primary">
              Handicap berechnen
            </HashLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
  if (verifyState == "novalid_objectid") {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <i className="fas fa-times-octagon failure"></i>
            <h1>ID nicht zulässig.</h1>
            <HashLink to="/" className="btn btn-primary">
              Handicap berechnen
            </HashLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
  if (verifyState == "missing_userid") {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <i className="fas fa-times-octagon failure"></i>
            <h1>Nutzer nicht gefunden.</h1>
            <HashLink to="/" className="btn btn-primary">
              Handicap berechnen
            </HashLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
  if (verifyState == "user already activated") {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <i className="fas fa-check sucess"></i>
            <h1>E-Mail ist bereits bestätigt.</h1>
            <HashLink to="/" className="btn btn-primary">
              Handicap berechnen
            </HashLink>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <i className="fas fa-times-octagon failure"></i>
            <h1>nothing</h1>
            <HashLink to="/" className="btn btn-primary">
              Handicap berechnen
            </HashLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default VerifyAccount;
