import React from 'react';

import Form from './component/Form'
import './App.css';

import FemaleCartoon from './components/FemaleCartoon';
import MaleCartoon from './components/MaleCartoon';
import Output from './components/Output';

import Nav from './components/Nav';
import './components/Nav.css';



function App() {
  return (
    <div className="App">
      <Nav/>
    <Form />
    <Output />
    </div>
  );
}

export default App;
