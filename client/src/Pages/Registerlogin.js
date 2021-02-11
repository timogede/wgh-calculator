import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().min(6).required(),
  email: Joi.string()
    .min(6)
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().min(6).required(),
});

const Registerlogin = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: joiResolver(registerSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    const newUser = {
      name: data.username,
      email: data.email,
      password: data.password,
    };
    console.log(newUser);
    axios.post("http://localhost:3333/user/register", data);
  };
  const submitForm = (data) => {
    console.log("123");
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

              <input type="submit" id="submit" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Registerlogin;
