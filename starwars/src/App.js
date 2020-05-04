import React, { useState, useEffect } from "react";
import "./App.css";
import Characters from './components/Characters.js'

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="character-container">
        <Characters />
      </div>
    </div>
  );
};

export default App;