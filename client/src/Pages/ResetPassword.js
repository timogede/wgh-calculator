import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import logo from "../images/logo.svg";

const resetSchema = Joi.object({
  password: Joi.string().min(6).required(),
  repeat_password: Joi.ref("password"),
});

const ResetPassword = () => {
  const [resetSucess, setResetSucess] = useState("");
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(resetSchema),
  });
  const onSubmit = (data) => {
    console.log(data.password);
    const newPassword = {
      password: data.password,
    };
    const link = window.location.pathname.split("/");
    const userID = link[link.length - 2];
    const token = link[link.length - 1];

    axios
      .post(
        "http://localhost:3333/user/reset-password/" + userID + "/" + token,
        newPassword
      )
      .then((response) => {
        if (response.data == "all good!") {
          console.log("testx");
        }
      })
      .catch((error) => {
        console.log("error: " + error.response.data);

        if (error.response.data == "novalid_objectid") {
          console.log("testy");
        }
      });
  };

  return (
    <React.Fragment>
      <div className="reset-password container">
        <div className="reset-password__inside container__inside container__inside-small">
          <img style={{ filter: "invert(80%)" }} src={logo} />
          <h2>Passwort zurücksetzen</h2>
          <div className="inputs">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="password"
                name="password"
                placeholder="Passwort"
                ref={register}
              />
              {errors.password && (
                <span>Password zu kurz. Mindestens 6 Zeichen.</span>
              )}

              <br />
              <br />
              <input
                type="password"
                name="repeat_password"
                placeholder="Passwort wiederholen"
                ref={register}
              />

              {errors.repeat_password && (
                <span>Die Passwörter stimmen nicht überein.</span>
              )}
              <br />
              <input type="submit" id="reset_password" value="Zurücksetzen" />
            </form>
          </div>
          <div className={resetSucess ? "resetsucess sucess" : "resetsucess"}>
            <i className="fas fa-badge-check sucess"></i>
            <h3>Dein Passwort wurde zurückgesetzt!</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
