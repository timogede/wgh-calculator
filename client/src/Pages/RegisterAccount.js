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
});

const RegisterAccount = () => {
  const [duplicateError, setDuplicateError] = useState(false);
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
        <div className="register-account__inside container__inside">
          <img style={{ filter: "invert(80%)" }} src={logo} />
          <h2>Melde dich bei handicap.report an!</h2>
          <p>
            Erstelle dein handicap.report Profil und erhalte Zugang zu deinen
            Handicap-Daten auf deinem Smartphone, Tablet oder Computer.
          </p>
          <div className="inputs">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="username"
                ref={register}
                placeholder="Nutzername"
              />
              {errors.username && <span>my custom error</span>}
              <input
                type="text"
                name="email"
                placeholder="E-Mail"
                ref={register}
              />

              <input
                type="password"
                name="password"
                placeholder="Passwort"
                ref={register}
              />

              <input type="submit" id="submit_account" value="Registrieren" />
              {duplicateError && <span>{duplicateError}</span>}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterAccount;
