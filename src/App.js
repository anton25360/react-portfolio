import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";

function App() {
  return (
    <Router basename='/'>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
