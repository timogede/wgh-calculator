import React, { useState, useEffect } from "react";
import axios from "axios";

const VerifyAccount = ({ language }) => {
  const [verifyState, setVerifyState] = useState("");
  const getVerify = async () => {
    const link = window.location.pathname.split("/");
    const userID = link[link.length - 2];
    const token = link[link.length - 1];
    try {
      const verify = await axios.get(
        "http://localhost:3333/user/verify/" + userID + "/" + token
      );
      console.log("fetchedData: " + JSON.stringify(verify.data));
      const fetchedData = JSON.stringify(verify.data);
      if (fetchedData == "all good!") {
        console.log("test1");
        setVerifyState("all good!");
      }
      if (fetchedData == "novalid_objectid") {
        console.log("test2");
        setVerifyState("novalid_objectid");
      }
      if (fetchedData == "missing_userid") {
        console.log("test3");
        setVerifyState("missing_userid");
      }
      if (fetchedData == "token is not correct hacker!") {
        console.log("test4");
        setVerifyState("token is not correct hacker!");
      }
      if (fetchedData == "user already activated") {
        console.log("test5");
        setVerifyState("user already activated");
      }
    } catch (err) {
      console.log("The error" + err.message);
    }
  };
  getVerify();

  if (verifyState == "all good!") {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <h1>all good</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
  if (verifyState == "user already activated") {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <h1>already activated</h1>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="verify-account container" id="">
          <div className="verify-account__inside container__inside">
            <h1>nothing</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default VerifyAccount;
