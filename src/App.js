import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home">
              <News country="in" category="general" pageSize={9} />
            </Route>
            <Route exact path="/business">
              <News country="in" category="business" pageSize={9} />
            </Route>
            <Route exact path="/entertainment">
              <News country="in" category="entertainment" pageSize={9} />
            </Route>
            <Route exact path="/health">
              <News country="in" category="health" pageSize={9} />
            </Route>
            <Route exact path="/science">
              <News country="in" category="science" pageSize={9} />
            </Route>
            <Route exact path="/sports">
              <News country="in" category="sports" pageSize={9} />
            </Route>
            <Route exact path="/technology">
              <News country="in" category="technology" pageSize={9} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
