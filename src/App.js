import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);

  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#000000" height={3} progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              category="general"
              pageSize={9}
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              category="business"
              pageSize={9}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              category="entertainment"
              pageSize={9}
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              category="health"
              pageSize={9}
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              category="science"
              pageSize={9}
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              category="sports"
              pageSize={9}
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              category="technology"
              pageSize={9}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
