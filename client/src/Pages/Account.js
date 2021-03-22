import axios from "axios";
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  login,
  logout,
  changeTodos,
  changeUsername,
  removeUsername,
  removeEmail,
  removeProfilephoto,
  changeProfilephoto,
} from "../actions";

const Account = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loggedReducer);
  const isUsername = useSelector((state) => state.usernameReducer);
  const isProfilephoto = useSelector((state) => state.profilephotoReducer);
  const isEmail = useSelector((state) => state.emailReducer);
  const localStorageToken = localStorage.getItem("auth-token");
  const form = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [disableButton, setDisableButton] = useState(true);
  const [toggleClass, setToggleClass] = useState("");

  const deleteToggler = () => {
    const bodyTag = document.body;
    if (bodyTag.classList.contains("edit_mode")) {
      bodyTag.classList.remove("edit_mode");
    } else {
      bodyTag.classList.add("edit_mode");
    }
  };

  const editPhotoHandler = () => {
    console.log("123");
  };

  const logOutHandler = () => {
    dispatch(logout());
    dispatch(changeTodos([]));
    dispatch(removeUsername());
    dispatch(removeEmail());
    dispatch(removeProfilephoto());
    localStorage.removeItem("auth-token");
  };

  const deleteHandler = () => {
    axios.delete("http://localhost:3333/delete-data", {
      headers: {
        "auth-token": localStorageToken,
      },
    });
    logOutHandler();
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDisableButton(false);
    setToggleClass("toggle_show");
  };
  const onFileUpload = (e) => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log(selectedFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("/profileimage", formData, config)
      .then((res) => {
        console.log(res.data);
        dispatch(changeProfilephoto(res.data.imageUrl));
        setToggleClass("");
        setSelectedFile(null);
      })
      .catch((err) => {
        console.log(err);
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
              hier findest du alle deine Daten, kannst dich abmelden oder deinen
              Account löschen.
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
            <p>Profilfoto:</p>
            <div className="profilephoto__wrap">
              <div className="profilephoto">
                <a onClick={editPhotoHandler}>
                  <img
                    src={`/uploads/images/${isProfilephoto}`}
                    alt="Profilephoto"
                  />
                </a>
              </div>

              <label htmlFor="image">
                <i className="fa fa-edit"></i>Profilfoto ändern
                <input type="file" onChange={onFileChange} name="image" />
              </label>
              <br />
              <button
                className={toggleClass}
                onClick={onFileUpload}
                disabled={disableButton}
              >
                <i className="fas fa-upload"></i>Speichern
              </button>
            </div>
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
