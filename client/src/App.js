import React from "react";
import MyHeader from "./components/MyHeader.js";
import MyFooter from "./components/MyFooter.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Impressum from "./Pages/Impressum";
import Datenschutz from "./Pages/Datenschutz";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <MyHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/datenschutz" component={Datenschutz} />
        </Switch>
        <MyFooter />
      </React.Fragment>
    </Router>
  );
};

export default App;
