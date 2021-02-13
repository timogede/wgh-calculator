import axios from "axios";
import React, { useState } from "react";

const LoginAccount = () => {
  const [loginError, setLoginError] = useState(false);

  const onSubmit = (event) => {
    const data = new FormData(event.target);
    event.preventDefault();
    setLoginError(false);
    console.log();
    const newUser = {
      email: data.get("email"),
      password: data.get("password"),
    };

    axios
      .post("http://localhost:3333/user/login", newUser)
      .then(function (response) {
        console.log("loggedIn and auth set");
        localStorage.setItem();
      })
      .catch(function (error) {
        const errorMessage = error.response.data;
        if (errorMessage === "error_mail") {
          setLoginError("Ein Account mit dieser E-Mail besteht nicht!");
        }
        if (errorMessage === "error_password") {
          setLoginError("Das Passwort ist falsch!");
        }
      });
  };

  return (
    <React.Fragment>
      <div className="registerlogin container">
        <div className="registerlogin__inside container__inside">
          <div className="title">Login</div>
          <div className="inputs">
            <form onSubmit={onSubmit}>
              <input type="text" name="email" placeholder="E-Mail" />
              <input type="password" name="password" placeholder="Passwort" />
              <input type="submit" id="submit_login" value="Login" />
              {loginError && <span>{loginError}</span>}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginAccount;
