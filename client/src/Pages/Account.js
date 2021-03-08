import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  login,
  logout,
  changeTodos,
  changeUsername,
  removeUsername,
  removeEmail,
} from "../actions";

const Account = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loggedReducer);
  const isUsername = useSelector((state) => state.usernameReducer);
  const isEmail = useSelector((state) => state.emailReducer);
  const localStorageToken = localStorage.getItem("auth-token");

  const deleteToggler = () => {
    const bodyTag = document.body;
    if (bodyTag.classList.contains("edit_mode")) {
      bodyTag.classList.remove("edit_mode");
    } else {
      bodyTag.classList.add("edit_mode");
    }
  };

  const logOutHandler = () => {
    dispatch(logout());
    dispatch(changeTodos([]));
    dispatch(removeUsername());
    dispatch(removeEmail());
    localStorage.removeItem("auth-token");
  };

  const deleteHandler = () => {
    axios.delete("http://localhost:3333/delete-data", {
      headers: {
        "auth-token": localStorageToken,
      },
    });
  };
  if (isLogged) {
    return (
      <React.Fragment>
        <div className="account container">
          <div className="account__inside container__inside">
            <h2>Dein Account</h2>
            <p>
              Hallo {isUsername},<br />
              hier findest du alle deine Daten, die du bei der Erstellung deines
              Accounts angegeben hast.
              <br />
              <b>{isUsername}</b>
              <br />
              <b>{isEmail}</b>
              <br />
            </p>
            <button onClick={logOutHandler}>Abmelden</button>
            <br />
            <button id="delete__toggler" onClick={deleteToggler}>
              Account löschen
            </button>
            <div className="delete__confirmation">
              <button onClick={deleteToggler}>
                <i className="fas fa-times"></i>
              </button>
              <button onClick={deleteHandler}>Löschung bestätigen</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/anmelden" />;
  }
};

export default Account;
