import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import logo from "../images/logo.svg";

const registerSchema = Joi.object({
  username: Joi.string().min(6).required(),
  email: Joi.string()
    .min(6)
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().min(6).required(),
  checkbox: Joi.boolean().invalid(false),
});

const RegisterAccount = () => {
  const [duplicateError, setDuplicateError] = useState(false);
  const [registerSucess, setRegisterSucess] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(registerSchema),
  });
  const onSubmit = (data) => {
    setDuplicateError(false);
    if (localStorage.getItem("todos")) {
      let todosToObject = JSON.parse(localStorage.getItem("todos"));
    } else {
      let todosToObject = [];
    }

    const todosToObject = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    console.log(typeof todosToObject);
    const newUser = {
      name: data.username,
      email: data.email,
      password: data.password,
      everything: todosToObject,
    };

    axios
      .post("http://localhost:3333/user/register", newUser)
      .then(function (response) {
        console.log("worked");
        const sucessMessage = response.data;
        if (sucessMessage === "register_sucess") {
          setRegisterSucess(true);
        }
      })
      .catch(function (error) {
        const errorMessage = error.response.data;
        if (errorMessage === "duplicate_mail") {
          setDuplicateError("Ein Account mit dieser E-Mail besteht bereits!");
        }
        if (errorMessage === "duplicate_username") {
          setDuplicateError(
            "Ein Account mit diesem Nutzernamen besteht bereits!"
          );
        }
      });
  };

  return (
    <React.Fragment>
      <div className="register-account container">
        <div className="register-account__inside container__inside container__inside-small">
          <img style={{ filter: "invert(80%)" }} src={logo} />
          <h2>Melde dich bei handicap.report an!</h2>
          <p>
            Erstelle dein handicap.report Profil, spreichere deine Runden und
            erhalte Zugang zu deinen Handicap-Daten auf deinem Smartphone,
            Tablet oder Computer.
          </p>
          <div className="inputs">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="username"
                ref={register}
                placeholder="Nutzername"
              />
              {errors.username && (
                <span>Nutzername zu kurz. Mindestens 6 Zeichen.</span>
              )}
              {errors.username && errors.username.message}

              <br />
              <input
                type="text"
                name="email"
                placeholder="E-Mail"
                ref={register}
              />
              {errors.email && <span>E-Mail nicht gültig.</span>}
              {errors.email && errors.email.message}
              <br />
              <input
                type="password"
                name="password"
                placeholder="Passwort"
                ref={register}
              />
              {errors.password && (
                <span>Password zu kurz. Mindestens 6 Zeichen.</span>
              )}
              {errors.password && errors.password.message}
              <br />

              <label
                onClick={() => setIsChecked(!isChecked)}
                className="container--checkbox"
                htmlFor="checkbox"
              >
                <input
                  type="checkbox"
                  name="checkbox"
                  ref={register}
                  onChange={(event) =>
                    setIsChecked(event.currentTarget.checked)
                  }
                  checked={isChecked}
                />
                Ich bin mit der Datenschutzerklärung einverstanden.
                <span className="checkmark"></span>
              </label>
              {errors.checkbox && (
                <span>Bitte der Datenschutzerklärung zustimmen.</span>
              )}

              <br />
              <input type="submit" id="submit_account" value="Registrieren" />
              {duplicateError && <span>{duplicateError}</span>}
            </form>
          </div>
          <div
            className={
              registerSucess ? "registersucess sucess" : "registersucess"
            }
          >
            <i className="fas fa-badge-check sucess"></i>
            <h3>Registrierung erfolgreich</h3>
            <p>
              Bitte bestätige noch deine E-Mail um die Registrierung
              abzuschließen.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterAccount;
