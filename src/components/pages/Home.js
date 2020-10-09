import React from "react";
import "../../App.css";

//components
import Navbar from "../Navbar";
import Landing from "../Landing";
import About from "../About";
import Skills from "../Skills";
import MajorProjects from "../MajorProjects";
import Contact from "../Contact";

function Home() {
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

export default Home;
