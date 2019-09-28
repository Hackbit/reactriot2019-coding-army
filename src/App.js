import React from 'react';
import './App.css';

import FemaleCartoon from './components/FemaleCartoon';
import MaleCartoon from './components/MaleCartoon';
import Output from './components/Output';

import Nav from './components/Nav';
import './components/Nav.css';



function App() {
  return (
    <div className="App">
      <Nav />

      <FemaleCartoon />
      <Output />


    </div>
  );
}

export default App;
