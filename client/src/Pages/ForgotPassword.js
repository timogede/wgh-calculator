import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import logo from "../images/logo.svg";

const ForgotPassword = () => {
  const [resetSucess, setResetSucess] = useState("");
  const sendResetReq = (event) => {
    console.log(event.target.email.value);
    const submittedMail = event.target.email.value;
    axios
      .get("http://localhost:3333/user/forgot-password", submittedMail)
      .then((response) => {
        console.log("worked");
        const sucessMessage = response.data;
        if (sucessMessage === "forgotmail_sucess") {
          setResetSucess("forgotmail_sucess");
        }
      })
      .catch((error) => {
        const errorMessage = error.response.data;
        if (errorMessage === "mail_not_found") {
          setResetSucess("mail_not_found");
        }
      });
  };
  return (
    <React.Fragment>
      <div className="forgot-password container">
        <div className="forgot-password__inside container__inside container__inside-small">
          <img style={{ filter: "invert(80%)" }} src={logo} />
          <h2>Passwort vergessen</h2>
          <form onSubmit={sendResetReq}>
            <input type="text" name="email" placeholder="E-Mail" />
            <br />
            <input type="submit" id="submit_reset_req" value="Zurücksetzen" />
          </form>
          <div className={resetSucess ? "resetfail sucess" : "resetfail"}>
            {resetSucess == "forgotmail_sucess" ? (
              <>
                <i className="fas fa-check"></i>
                <h3>
                  Eine E-Mail zum Zurücksetzen des Passwortes wurde verschickt.
                </h3>
              </>
            ) : (
              ""
            )}
            {resetSucess == "mail_not_found" ? (
              <>
                <i className="fas fa-times"></i>
                <h3>Diese E-Mail ist nicht registriert.</h3>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
