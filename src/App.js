//at this point I'm too scared to delete stuff, so this cool logo is gonna stay
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>{counter}</h1>
          <h4>{counter} is my (currently) favorite number.</h4>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
