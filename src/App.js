import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Home from './components/pages/Home'
import Gallery from './components/pages/Gallery'

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Landing />
    //   <About />
    //   <Skills />
    //   <Projects />
    //   <Contact />
    // </div>

    <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
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
