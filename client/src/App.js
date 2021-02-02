import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import MyHeader from "./components/MyHeader.js";
import MyFooter from "./components/MyFooter.js";
import Signup from "./components/Signup.js";
import Dashboard from "./components/Dashboard.js";
import Login from "./components/Login.js";
import ForgotPassword from "./components/ForgotPassword.js";
import UpdateProfile from "./components/UpdateProfile.js";
import PrivateRoute from "./components/PrivateRoute.js";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./Pages/Home";
import Impressum from "./Pages/Impressum";
import Datenschutz from "./Pages/Datenschutz";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <Router>
      <AuthProvider>
        <React.Fragment>
          <MyHeader />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/datenschutz" component={Datenschutz} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/update-profile" component={UpdateProfile} />
          </Switch>
          <MyFooter />
        </React.Fragment>
      </AuthProvider>
    </Router>
  );
};

export default App;
