import React from 'react';
import './App.css';

//components
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div >
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;
