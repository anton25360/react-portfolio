import React from 'react';
import './App.css';

//components
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'

function App() {
  return (
    <div >
      <Navbar />
      <Landing />
      <About />
      
    </div>
  );
}

export default App;
