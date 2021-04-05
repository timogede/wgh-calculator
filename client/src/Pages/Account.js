import axios from "axios";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactCrop from "react-image-crop";
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

function generateDownload(canvas, crop) {
  if (!crop || !canvas) {
    return;
  }

  canvas.toBlob(
    (blob) => {
      const previewUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.download = "cropPreview.png";
      anchor.href = URL.createObjectURL(blob);
      anchor.click();

      window.URL.revokeObjectURL(previewUrl);
    },
    "image/png",
    1
  );
}

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
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);

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

  const onFileChange = (e) => {
    console.log(e.target.value);
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setDisableButton(false);
      setToggleClass("toggle_show");
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const onFileUpload = (e) => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log(selectedFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "auth-token": localStorageToken,
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
                  {/* <img
                    src={`/uploads/images/${isProfilephoto}`}
                    alt="Profilephoto"
                  /> */}
                  <div
                    className="profilephoto__div"
                    style={{
                      backgroundImage: `url(/uploads/images/${isProfilephoto})`,
                    }}
                  ></div>
                </a>
              </div>

              <label htmlFor="image">
                <i className="fa fa-edit"></i>Profilfoto ändern
                <br />
                <input type="file" onChange={onFileChange} name="image" />
              </label>
              <br />
              {/* <ReactCrop
                src={upImg}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
              />
              <div>
                <canvas
                  ref={previewCanvasRef}
                  // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
                  style={{
                    width: Math.round(completedCrop?.width ?? 0),
                    height: Math.round(completedCrop?.height ?? 0),
                  }}
                />
              </div>
              <p>
                Note that the download below won't work in this sandbox due to
                the iframe missing 'allow-downloads'. It's just for your
                reference.
              </p>
              <button
                type="button"
                disabled={!completedCrop?.width || !completedCrop?.height}
                onClick={() =>
                  generateDownload(previewCanvasRef.current, completedCrop)
                }
              >
                Download cropped image
              </button> */}
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
    {
      console.log("not logged -> redirect");
    }
    return <Redirect to="/anmelden" />;
  }
};

export default Account;
