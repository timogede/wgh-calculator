import React, { useState, useEffect } from "react";
import MyHeader from "./components/MyHeader.js";
import MyFooter from "./components/MyFooter.js";
import Signup from "./components/Signup.js";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import Home from "./Pages/Home";
import Impressum from "./Pages/Impressum";
import Datenschutz from "./Pages/Datenschutz";
const App = () => {



  return (
    <Router>
    <AuthProvider>
      <React.Fragment>
        <Signup />
        <MyHeader />
        <Route path="/" exact component={Home}/>
        <Route path="/impressum" component={Impressum}/>
        <Route path="/datenschutz" component={Datenschutz}/>
        <MyFooter />
      </React.Fragment>
      </AuthProvider>
    </Router>

  );
}

export default App;
