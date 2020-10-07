import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "./App.css";
import '../../App.css'

//components
import Navbar from "../Navbar";
import Landing from "../Landing";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

function Gallery() {
  return (
    <div>
      <Navbar />
      {/* <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>

  
  );
}

export default Gallery;
