import React from 'react';
import Form from './component/Form'
import Output from './components/Output';
import Nav from './components/Nav';
import './App.css';
import LetsPlay from './components/LetsPlay';



function App() {
  return (
    <div className="App">
      <Nav />
      <LetsPlay />
      <Output />
    </div>
  );
}

export default App;
