import React, { useState, useEffect } from "react";
import MyHeader from "./components/MyHeader.js";
import MyFooter from "./components/MyFooter.js";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Impressum from "./Pages/Impressum";
import Datenschutz from "./Pages/Datenschutz";
const App = () => {



  return (
    <Router>
      <React.Fragment>
        <MyHeader />
        <Route path="/" exact component={Home}/>
        <Route path="/impressum" component={Impressum}/>
        <Route path="/datenschutz" component={Datenschutz}/>
        <MyFooter />
      </React.Fragment>
    </Router>

  );
}

export default App;
