import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";

function App() {
  return (
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/gallery">
    //         <Gallery />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    <Router basename='/'>
    <div>
     <Route exact path="/" component={Home} />
     <Route path="/gallery" component={Gallery} />
    </div>
   </Router>
  );
}

export default App;
