import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" category="general" pageSize={9} />
            </Route>
            <Route exact path="/business">
              <News key="business" category="business" pageSize={9} />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" category="entertainment" pageSize={9} />
            </Route>
            <Route exact path="/health">
              <News key="health" category="health" pageSize={9} />
            </Route>
            <Route exact path="/science">
              <News key="science" category="science" pageSize={9} />
            </Route>
            <Route exact path="/sports">
              <News key="sports" category="sports" pageSize={9} />
            </Route>
            <Route exact path="/technology">
              <News key="technology" category="technology" pageSize={9} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
