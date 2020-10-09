import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import MajorProjects from "./components/MajorProjects";
import Contact from "./components/Contact";

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
