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
            <h1>Dein Account</h1>
            <p>
              Hallo {isUsername},<br />
              hier findest du alle deine Daten, die du bei der Erstellung deines
              Accounts angegeben hast.
            </p>

            <p>
              Username:
              <br />
              <b>{isUsername}</b>
            </p>
            <p>
              E-Mail:
              <br />
              <b>{isEmail}</b>
            </p>
            <h2>Abmelden</h2>
            <button onClick={logOutHandler}>
              <i className="fas fa-sign-out-alt"></i>Abmelden
            </button>
            <br />
            <div className="dangerzone">
              <h2>Account löschen</h2>
              <button id="delete__toggler" onClick={deleteToggler}>
                <i className="fas fa-trash-alt"></i>Account löschen
              </button>
            </div>
            <div className="delete__confirmation">
              <h2>Achtung!</h2>
              <p>Dein Account kann nicht wiederhergestellt werden.</p>
              <button className="deletehandler" onClick={deleteHandler}>
                <i className="fas fa-trash-alt"></i>Löschen
              </button>
              <button onClick={deleteToggler}>
                <i className="fas fa-times"></i>Abbrechen
              </button>
            </div>
            <div className="bg"></div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/anmelden" />;
  }
};

export default Account;
