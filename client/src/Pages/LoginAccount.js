import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  logout,
  changeTodos,
  changeUsername,
  removeUsername,
} from "../actions";

const LoginAccount = () => {
  const isLogged = useSelector((state) => state.loggedReducer);
  const isUsername = useSelector((state) => state.usernameReducer);
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
        console.log("set to localStorage: " + authToken);
        localStorage.setItem("auth-token", authToken);
        console.log(JSON.stringify(todosFromCloud));
        dispatch(changeTodos(todosFromCloud));
        dispatch(login());
        dispatch(changeUsername(nameFromCloud));
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

  const logOutHandler = () => {
    dispatch(logout());
    dispatch(changeTodos([]));
    dispatch(removeUsername());
    localStorage.removeItem("auth-token");
  };

  return (
    <React.Fragment>
      <div className="login-account container">
        <div className="login-account__inside container__inside container__inside-small">
          <div className="title">Login</div>
          <div className="inputs">
            <form onSubmit={onSubmit}>
              <input type="text" name="email" placeholder="E-Mail" />
              <input type="password" name="password" placeholder="Passwort" />
              <input type="submit" id="submit_login" value="Login" />
              {loginError && <span>{loginError}</span>}
              {isLogged ? <h3>isLogged</h3> : "isnotLogged"}
            </form>
            <button onClick={logOutHandler}>Logout</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginAccount;
