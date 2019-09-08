import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Encryptor} from "./Encryptor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Encryptor />
      </header>

    </div>
  );
}

export default App;
