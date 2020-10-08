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
    <div>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <MajorProjects />
      <Contact />
    </div>
  );
}

export default App;
