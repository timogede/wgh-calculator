import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Registerlogin = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(6)
      .max(255)
      .required("Bitte gib einen Nutzernamen an!"),
    email: yup
      .string()
      .min(6)
      .max(255)
      .email()
      .required("Bitte gib eine E-Mail an!"),
    password: yup
      .string()
      .min(6)
      .max(30)
      .required("Bitte gib ein Passwort an!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  const registerHandler = () => {
    const registerUser = {
      name: "",
    };
    axios.get();
  };
  const loginHandler = () => {};
  return (
    <React.Fragment>
      <div className="registerlogin container">
        <div className="registerlogin__inside container__inside">
          <div className="title">Anmelden</div>
          <div className="inputs">
            <form onSubmit={handleSubmit(submitForm)}>
              <input
                type="text"
                name="name"
                ref={register}
                placeholder="Nutzername"
              />
              <p> {errors.name?.message} </p>
              <input
                type="text"
                name="email"
                placeholder="E-Mail"
                ref={register}
              />
              <p> {errors.email?.message} </p>
              <input
                type="password"
                name="password"
                placeholder="Passwort"
                ref={register}
              />
              <p> {errors.password?.message} </p>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Passwort bestätigen"
                ref={register}
              />
              <p>
                {" "}
                {errors.confirmPassword &&
                  "Die Passwörter müssen übereinstimmen!"}{" "}
              </p>
              <input type="submit" id="submit" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Registerlogin;
