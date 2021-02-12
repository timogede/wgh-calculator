import axios from "axios";
import React, { useState } from "react";

const LoginAccount = () => {
  const [loginError, setLoginError] = useState(false);

  const onSubmit = (data) => {
    setLoginError(false);
    const newUser = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("http://localhost:3333/user/register", newUser)
      .then(function (response) {
        console.log("worked");
      })
      .catch(function (error) {
        const errorMessage = error.response.data;
        if (errorMessage === "duplicate_mail") {
          setLoginError("Ein Account mit dieser E-Mail besteht bereits!");
        }
        if (errorMessage === "duplicate_username") {
          setLoginError("Ein Account mit diesem Nutzernamen besteht bereits!");
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
              <input type="text" name="username" placeholder="Nutzername" />
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
