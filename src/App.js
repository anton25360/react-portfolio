import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    //       <Route exact path="/gallery">
    //         <Gallery />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

<Router basename="/build">
<Switch>
    {/* <Route path="/cafes/:cafe" component={ Cafe } />
    <Route path="/cafes" component={ CafeList } />
    <Route path="/add" component={ AddCafeForm } /> */}
    <Route path="/gallery" component={ Gallery } />
    <Route path="/" component={ Home } />
    {/* <Route component={ NotFound } /> */}
</Switch>
</Router>   
  );
}

export default App;
