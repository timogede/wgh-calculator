import React, { useState, useEffect } from "react";
import MyHeader from "./components/MyHeader.js";
import MyFooter from "./components/MyFooter.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Impressum from "./Pages/Impressum";
import Datenschutz from "./Pages/Datenschutz";
import Changelog from "./Pages/Changelog";
import LoginAccount from "./Pages/LoginAccount";
import VerifyAccount from "./Pages/VerifyAccount";
import RegisterAccount from "./Pages/RegisterAccount";
import Account from "./Pages/Account";
import ResetPassword from "./Pages/ResetPassword.js";
import ForgotPassword from "./Pages/ForgotPassword.js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTodos,
  login,
  logout,
  changeUsername,
  changeEmail,
  removeUsername,
  changeProfilephoto,
} from "./actions/index.js";

const App = () => {
  //This has to be changed
  // const currentlyLoggedIn = 333;
  const url = "http://localhost:3333";
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loggedReducer);
  const isUsername = useSelector((state) => state.usernameReducer);
  const isProfilephoto = useSelector((state) => state.profilephotoReducer);
  const todos = useSelector((state) => state.todosReducer);
  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos")) {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        dispatch(changeTodos(todoLocal));
      }
    };
    const fetchData = async () => {
      try {
        const localStorageToken = localStorage.getItem("auth-token");
        const showMe = await axios.get(`${url}/fulldata`, {
          headers: {
            "auth-token": localStorageToken,
          },
        });

        console.log("fetchedData: " + JSON.stringify(showMe.data));
        if (showMe.data == null) {
          dispatch(changeTodos([]));
        } else {
          dispatch(changeTodos(showMe.data.everything));
          dispatch(changeUsername(showMe.data.name));
          dispatch(changeEmail(showMe.data.email));
          dispatch(changeProfilephoto(showMe.data.profilephoto));
          dispatch(login());
        }
      } catch (err) {
        console.log(err);
        getLocalTodos();
      }
    };

    fetchData();
  }, []);
  return (
    <Router>
      <React.Fragment>
        <MyHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/datenschutz" component={Datenschutz} />
          <Route path="/changelog" component={Changelog} />
          <Route path="/anmelden" component={LoginAccount} />
          <Route path="/registrieren" component={RegisterAccount} />
          <Route path="/account" component={Account} />
          <Route
            path="/user/passwort-zuruecksetzen"
            component={ResetPassword}
          />
          <Route path="/passwort-vergessen" component={ForgotPassword} />
          <Route path="/bestaetigen" component={VerifyAccount} />
        </Switch>
        <MyFooter />
      </React.Fragment>
    </Router>
  );
};

export default App;
