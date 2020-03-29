import React from 'react';
import './App.css';

//components
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <div >
      <Navbar />
      <Landing />
      <About />
      <Skills />
      
    </div>
  );
}

export default App;
