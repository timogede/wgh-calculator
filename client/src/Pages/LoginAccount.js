import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  logout,
  changeTodos,
  changeUsername,
  removeUsername,
  changeEmail,
  changeProfilephoto,
} from "../actions";
import logo from "../images/logo.svg";
import { Redirect } from "react-router-dom";

const LoginAccount = () => {
  const isLogged = useSelector((state) => state.loggedReducer);
  const isUsername = useSelector((state) => state.usernameReducer);
  const isProfilephoto = useSelector((state) => state.profilephotoReducer);
  const todos = useSelector((state) => state.todosReducer);
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();

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
      .then((response) => {
        const authToken = response.data["auth-token"];
        const todosFromCloud = response.data.userdata.scoredata;
        const nameFromCloud = response.data.userdata.username;
        const emailFromCloud = response.data.userdata.email;
        const profilephotoFromCloud = response.data.userdata.profilephoto;
        console.log("set to localStorage: " + authToken);
        localStorage.setItem("auth-token", authToken);
        console.log(JSON.stringify(todosFromCloud));
        dispatch(changeTodos(todosFromCloud));
        dispatch(login());
        dispatch(changeUsername(nameFromCloud));
        dispatch(changeEmail(emailFromCloud));
        dispatch(changeProfilephoto(profilephotoFromCloud));
      })
      .catch((error) => {
        console.log("error: " + error.response.data);
        const errorMessage = error.response.data;
        if (errorMessage === "error_mail") {
          setLoginError("Ein Account mit dieser E-Mail besteht nicht!");
        }
        if (errorMessage === "error_password") {
          setLoginError("Das Passwort ist falsch!");
        }
      });
  };

  if (!isLogged) {
    return (
      <React.Fragment>
        <div className="login-account container">
          <div className="login-account__inside container__inside container__inside-small">
            <img style={{ filter: "invert(80%)" }} src={logo} />
            <h2>Anmelden</h2>
            <p></p>
            <div className="inputs">
              <form onSubmit={onSubmit}>
                <input type="text" name="email" placeholder="E-Mail" />
                <input
                  type="password"
                  autoComplete="current-password"
                  name="password"
                  placeholder="Passwort"
                />
                <input type="submit" id="submit_login" value="Login" />
                {loginError && <span>{loginError}</span>}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default LoginAccount;
