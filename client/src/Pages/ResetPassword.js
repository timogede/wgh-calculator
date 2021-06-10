import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import logo from "../images/logo.svg";

const ResetPassword = () => {
  return (
    <React.Fragment>
      <div className="reset-password container">
        <div className="reset-password__inside container__inside container__inside-small">
          <img style={{ filter: "invert(80%)" }} src={logo} />
          <h2>Passwort zurücksetzen</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
